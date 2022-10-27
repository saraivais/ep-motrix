import { Request, Response, NextFunction } from 'express';
import ContentService from '../services/content.service';
class ContentController {
  constructor(private service: ContentService) {}


}

export default ContentController;
