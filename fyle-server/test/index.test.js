let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();
chai.use(chaiHttp);
describe('Index', () => {
    describe('/GET /', () => {
        it('should GET welcome message', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Welcome to fyle server!');
                    done();
                });
        });
        it('should throw 404 error for invalid route', (done) => {
            chai.request(server)
                .get('/invalid')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
    describe('/GET /user', () => {
        it('should GET user info', (done) => {
            chai.request(server)
                .get('/user?username=octocat')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('login').eql('octocat');
                    done();
                });
                
        });
        it('should throw 404 error for invalid user', (done) => {
             chai.request(server).get('/user?username=').end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
    describe('/GET /user/repos', () => {
        it('should GET user repos', (done) => {
            chai.request(server)
                .get('/user/repos?username=octacat&size=2')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.at.most(2);
                    done();
                });
        });
        it('should throw 404 error for invalid user', (done) => {
             chai.request(server).get('/user/repos?username=').end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    })
});