import { Request, Response, NextFunction } from 'express';
import UserService from '../services/user.service';
import IUser from '../interfaces/IUser';

class UserController {
  constructor(private service: UserService) {}

  public async login(
    request: Request,
    response: Response,
    _next: NextFunction,
  ): Promise<Response> {
    const loginInfo: IUser = request.body;
    const token = await this.service.login(loginInfo);

    return response.status(200).json({ token });
  }

  public async create(
    request: Request,
    response: Response,
    _next: NextFunction,
  ): Promise<Response> {
    const newUserInfo: IUser = request.body;
    const token = await this.service.create(newUserInfo);

    return response.status(200).json({ token });
  }
}

export default UserController;
