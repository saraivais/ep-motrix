import { Request, Response, NextFunction } from 'express';
import CustomError from './customError';

const errorMiddleware = (
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction,
):Response => {
  if (error instanceof CustomError) {
    const { code, message } = error;
    return response.status(code).json({ message });
  }

  return response.status(500).json({ message: 'Server error!' });
};

export default errorMiddleware;
