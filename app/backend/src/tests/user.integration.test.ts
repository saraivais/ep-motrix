import chai from 'chai';
import * as sinon from 'sinon';
import chaiHttp from 'chai-http';

import app from '../app';

import User from '../database/models/user';

// mocks
import userMocks from './mocks/userGeneralMocks';

chai.use(chaiHttp);

describe('Tests for Users & Authorization', () => {
  describe('POST /users/login - Allows the user to login to the application', () => {
    before(() => {
      sinon.stub(User, 'findOne')
        .onCall(0)
        .resolves(userMocks.validUser as User)
        .onCall(1)
        .resolves(null)
        .onCall(2)
        .resolves(userMocks.validUser as User);
    });

    after(() => {
      sinon.restore();
    });

    it('Returns a token when login is successful', async () => {
      const response = await chai.request(app).post('/users/login').send(userMocks.validLogin);
      const { body } = response;
      const { status } = response;

      chai.expect(status).to.be.equal(200);
      chai.expect(body).to.have.property('token');
    });

    it('Returns an error message if email is not registered', async () => {
      const response = await chai.request(app).post('/users/login').send(userMocks.unregisteredUser);
      const { body: { message } } = response;
      const { status } = response;

      chai.expect(status).to.be.equal(404);
      chai.expect(message).to.be.equal('User not found');
    });

    it('Returns an error message if the password does not match', async () => {
      const response = await chai.request(app).post('/users/login').send(userMocks.invalidPassword);

      const { body: { message } } = response;
      const { status } = response;

      chai.expect(status).to.be.equal(401);
      chai.expect(message).to.be.equal('Incorrect user/password');
    });
  });

  describe('POST /users - Allows the user to create a new account', () => {
    before(() => {
      sinon.stub(User, 'findOne')
        .onCall(0)
        .resolves(null)
        .onCall(1)
        .resolves(userMocks.alreadyRegistered as User);

      sinon.stub(User, 'create').resolves(userMocks.newUser as User);
    });

    after(() => {
      sinon.restore();
    });

    it('Returns a token when user creation is successful', async () => {
      const response = await chai.request(app).post('/users').send(userMocks.unregisteredUser);
      const { body } = response;
      const { status } = response;

      chai.expect(status).to.be.equal(200);
      chai.expect(body).to.have.property('token');
    });

    it('Returns an error message if the email is already registered', async () => {
      const response = await chai.request(app).post('/users').send({ email: 'motrix@one.com', password: 'secondtry' });
      const { body: { message } } = response;
      const { status } = response;

      chai.expect(status).to.be.equal(400);
      chai.expect(message).to.be.equal('User is already registered');
    });
  });
});
