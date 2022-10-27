import express from 'express';
import ContentController from '../controllers/content.controller';
import ContentService from '../services/content.service';
import Content from '../database/models/content';
import History from '../database/models/history';
import verifyAuthorization from '../middlewares/jwtAuth';
import 'express-async-errors';

const contentRoute = express.Router();

const contentService = new ContentService(Content, History);
const contentController = new ContentController(contentService);

contentRoute.delete('/:id', verifyAuthorization, (request, response, next) => contentController.deleteOne(request, response, next));

contentRoute.patch('/:id', (request, response, next) => contentController.update(request, response, next));

contentRoute.get('/:id', (request, response, next) => contentController.getById(request, response, next));

contentRoute.delete('/', verifyAuthorization, (request, response, next) => contentController.massDelete(request, response, next));

contentRoute.post('/', (request, response, next) => contentController.create(request, response, next));

contentRoute.get('/', (request, response, next) => contentController.getAll(request, response, next));

export default contentRoute;
