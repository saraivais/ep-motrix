import History from '../database/models/history';
import Content from '../database/models/content';
class ContentService {
  constructor(private model: typeof Content, private history: typeof History) {}

  public async getAll():Promise<IContent[]> {
    const result = await this.model.findAll();
    return result;
  }
}

export default ContentService;
