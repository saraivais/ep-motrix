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


  describe('GET /content/:id - Returns one content with history & user information', () => {});

  describe('POST /content - Creates a new content and updates history', () => {});

  describe('PATCH /content/:id - Updates a content and updates history', () => {});

  describe('DELETE /content/:id - Deletes one content', () => {});

  describe('DELETE /content - Deletes many contents', () => {});
});
