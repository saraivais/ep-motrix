import { Request, Response, NextFunction } from 'express';
import ContentService from '../services/content.service';
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

}

export default ContentController;
