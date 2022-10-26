import express from 'express';
import UserController from '../controllers/user.controller';
import UserService from '../services/user.service';
import User from '../database/models/user';
import 'express-async-errors';

const userRoute = express.Router();

const userService = new UserService(User);
const userController = new UserController(userService);


export default userRoute;
