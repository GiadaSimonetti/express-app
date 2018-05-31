var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var should = chai.should();

chai.use(chaiHttp);


describe('Hello world', () => {
  it('checks if `Hello f*****g World!` is in the page', () => {
    chai.request(server)
    .get('/')
    .end((req, res) => {
      res.text.should.contain('Hello f*****g World!');
    });
  });
});
