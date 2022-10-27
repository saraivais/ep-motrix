import chai from 'chai';
import * as sinon from 'sinon';
import chaiHttp from 'chai-http';

import app from '../app';

import Content from '../database/models/content';
import History from '../database/models/history';

// mocks
import contentMocks from './mocks/contentMock';
import tokenMocks from './mocks/tokenMocks';

chai.use(chaiHttp);

describe('Tests for Content & History', () => {
  describe('GET /content - Returns all content', () => {
    before(() => {
      sinon.stub(Content, 'findAll')
        .resolves(contentMocks.allContent as unknown as Content[]);
    });

    after(() => {
      sinon.restore();
    });

    it('Returns an array containing all content', async () => {
      const response = await chai.request(app).get('/content');
      const { status } = response;
      const { body } = response;

      chai.expect(status).to.be.equal(200);
      chai.expect(body).to.be.an('array');
    });
  });

  describe('GET /content/:id - Returns one content with history & user information', () => {
    before(() => {
      sinon.stub(Content, 'findByPk')
        .onCall(0)
        .resolves(contentMocks.oneContent as unknown as Content)
        .onCall(1)
        .resolves(contentMocks.oneContent as unknown as Content)
        .onCall(2)
        .resolves(contentMocks.oneContent as unknown as Content)
        .onCall(3)
        .resolves(null);
    });

    after(() => {});

    it('Returns status 200 OK when the id exists', async () => {
      const response = await chai.request(app).get('/content/7');
      const { status } = response;

      chai.expect(status).to.be.equal(200);
    });

    it('The returned object contains "user" and "history" keys from associations', async () => {
      const response = await chai.request(app).get('/content/7');
      const { body } = response;

      chai.expect(body).to.have.property('user');
      chai.expect(body).to.have.property('history');
    });

    it('The "history" key is an array', async () => {
      const response = await chai.request(app).get('/content/7');
      const { body: { history } } = response;

      chai.expect(history).to.be.an('array');
    });

    it('Returns an error message when the id does not exist', async () => {
      const response = await chai.request(app).get('/content/999');
      const { body: { message } } = response;
      const { status } = response;

      chai.expect(status).to.be.equal(404);
      chai.expect(message).to.be.equal('This content does not exist');
    });
  });

  describe('POST /content - Creates a new content and updates history', () => {
    before(() => {
      sinon.stub(Content, 'create').resolves(contentMocks.createdContent as unknown as Content);
      sinon.stub(History, 'create').resolves(contentMocks.historyCreated as unknown as History);
    });

    after(() => {
      sinon.restore();
    });

    it('Returns an error message if the jwt token is missing or invalid', async () => {
      const response = await chai.request(app).post('/content').set({ Authorization: tokenMocks.invalidToken }).send(contentMocks.contentToCreate);
      const { status } = response;
      const { body: { message } } = response;

      chai.expect(status).to.be.equal(401);
      chai.expect(message).to.be.equal('Token must be a valid token');
    });

    it('Returns status 201 (created) status when successful', async () => {
      const response = await chai.request(app).post('/content').set({ Authorization: tokenMocks.validToken }).send(contentMocks.contentToCreate);
      const { status } = response;

      chai.expect(status).to.be.equal(201);
    });

    it('Returns the created content containing "id", "userId", "created" and "updated" keys', async () => {
      const response = await chai.request(app).post('/content').set({ Authorization: tokenMocks.validToken }).send(contentMocks.contentToCreate);
      const { body } = response;

      chai.expect(body).to.have.property('id');
      chai.expect(body).to.have.property('userId');
      chai.expect(body).to.have.property('created');
      chai.expect(body).to.have.property('updated');
    });
  });

  describe('PATCH /content/:id - Updates a content and updates history', () => {
    before(() => {
      sinon.stub(Content, 'findOne')
        .onCall(0)
        .resolves(null)
        .onCall(1)
        .resolves(contentMocks.createdContent as unknown as Content)
        .onCall(2)
        .resolves(contentMocks.createdContent as unknown as Content)
        .onCall(3)
        .resolves(contentMocks.createdContent as unknown as Content)
        .onCall(4)
        .resolves(contentMocks.createdContent as unknown as Content);

      sinon.stub(Content, 'update');
      sinon.stub(History, 'create');
    });

    after(() => {
      sinon.restore();
    });

    it('Returns an error message if the id does not exist', async () => {
      const response = await chai.request(app).patch('/content/999').set({ Authorization: tokenMocks.validToken }).send(contentMocks.contentToUpdate);
      const { status } = response;
      const { body: { message } } = response;

      chai.expect(status).to.be.equal(404);
      chai.expect(message).to.be.equal('This content does not exist');
    });

    it('Returns an error message if the jwt token is missing or invalid', async () => {
      const response = await chai.request(app).patch('/content/12').set({ Authorization: tokenMocks.invalidToken }).send(contentMocks.contentToUpdate);
      const { status } = response;
      const { body: { message } } = response;

      chai.expect(status).to.be.equal(401);
      chai.expect(message).to.be.equal('Token must be a valid token');
    });

    it('Returns status code 200 if successful', async () => {
      const response = await chai.request(app).patch('/content/12').set({ Authorization: tokenMocks.validToken }).send(contentMocks.contentToUpdate);
      const { status } = response;

      chai.expect(status).to.be.equal(200);
    });
  });

  describe('DELETE /content/:id - Deletes one content', () => {
    before(() => {
      sinon.stub(Content, 'findByPk')
        .onCall(0)
        .resolves(null)
        .onCall(1)
        .resolves(contentMocks.createdContent as unknown as Content);
    });

    after(() => {
      sinon.restore();
    });

    it('Returns an error code if id does not exist', async () => {
      const response = await chai.request(app).delete('/content/999').set({ Authorization: tokenMocks.validToken });
      const { status } = response;
      const { body: { message } } = response;

      chai.expect(status).to.be.equal(404);
      chai.expect(message).to.be.equal('This content does not exist');
    });

    it('Returns an error message if token is missing or invalid', async () => {
      const response = await chai.request(app).delete('/content/12').set({ Authorization: tokenMocks.invalidToken });
      const { status } = response;
      const { body: { message } } = response;

      chai.expect(status).to.be.equal(401);
      chai.expect(message).to.be.equal('Token must be a valid token');
    });

    it('Returns status code 204 if successfully deleted content', async () => {
      const response = await chai.request(app).delete('/content/12').set({ Authorization: tokenMocks.validToken });
      const { status } = response;

      chai.expect(status).to.be.equal(204);
    });
  });


  describe('DELETE /content - Deletes many contents', () => {});
});
