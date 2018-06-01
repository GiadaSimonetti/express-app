var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
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

describe('Hello', () => {
  it('checks if page hello has status of 200', () => {
    chai.request(server)
    .get('/hello')
    .end((req, res) => {
      res.should.have.status(200);
    });
  });
});

describe('tdd', () => {
  it('checks if `TDD!!!!!` is in the page', () => {
    chai.request(server)
    .get('/tdd')
    .end((req, res) => {
      res.text.should.contain('TDD!!!!!!');
    });
  });
});
