import { Request, Response, NextFunction } from 'express';
import ContentService from '../services/content.service';
import IContent from '../interfaces/IContent';

class ContentController {
  constructor(private service: ContentService) {}

  public async getAll(
    request: Request,
    response: Response,
    _next: NextFunction,
  ): Promise<Response> {
    const result = await this.service.getAll();

    return response.status(200).json(result);
  }

  public async getById(
    request: Request,
    response: Response,
    _next: NextFunction,
  ): Promise<Response> {
    const { id } = request.params;
    const result = await this.service.getById(Number(id));

    return response.status(200).json(result);
  }

  public async create(
    request: Request,
    response: Response,
    _next: NextFunction,
  ): Promise<Response> {
    const newContent: IContent = request.body;
    const token = request.headers.authorization;

    const result = await this.service.create(newContent, token as string);

    return response.status(200).json(result);
  }

  public async update(
    request: Request,
    response: Response,
    _next: NextFunction,
  ): Promise<Response> {
    const contentToUpdate: IContent = request.body;
    const { id } = request.params;
    const token = request.headers.authorization;

    await this.service.update(contentToUpdate, token as string, Number(id));

    return response.status(200).end();
  }

}

export default ContentController;
