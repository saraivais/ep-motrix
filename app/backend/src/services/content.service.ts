import History from '../database/models/history';
import Content from '../database/models/content';
class ContentService {
  constructor(private model: typeof Content, private history: typeof History) {}

}

export default ContentService;
