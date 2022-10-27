import chai from 'chai';
import * as sinon from 'sinon';
import chaiHttp from 'chai-http';

import app from '../app';

import Content from '../database/models/content';
import History from '../database/models/history';

// mocks
import contentMocks from './mocks/contentMock';

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

  describe('POST /content - Creates a new content and updates history', () => {});

  describe('PATCH /content/:id - Updates a content and updates history', () => {});

  describe('DELETE /content/:id - Deletes one content', () => {});

  describe('DELETE /content - Deletes many contents', () => {});
});
