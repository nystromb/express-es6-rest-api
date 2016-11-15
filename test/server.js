const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../dist/server').default;
const expect = chai.expect;

chai.use(chaiHttp);

describe('/', () =>  {

  it('GET returns \"Hello World\"', (done) => {
    chai.request(app.server)
      .get('/')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.text).to.equal("Hello World!");
        done();
      });
  });
});
