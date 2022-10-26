import { Request, Response, NextFunction } from 'express';
import UserService from '../services/user.service';
import IUser from '../interfaces/IUser';

class UserController {
  constructor(private service: UserService) {}

}

export default UserController;
