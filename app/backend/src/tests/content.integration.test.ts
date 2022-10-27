import chai from 'chai';
import * as sinon from 'sinon';
import chaiHttp from 'chai-http';

import app from '../app';

import Content from '../database/models/content';
import History from '../database/models/history';

// mocks

describe('Tests for Content & History', () => {
  describe('GET /content - Returns all content', () => {});

  describe('GET /content/:id - Returns one content with history & user information', () => {});

  describe('POST /content - Creates a new content and updates history', () => {});

  describe('PATCH /content/:id - Updates a content and updates history', () => {});

  describe('DELETE /content/:id - Deletes one content', () => {});

  describe('DELETE /content - Deletes many contents', () => {});
});
