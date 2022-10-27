import History from '../database/models/history';
import Content from '../database/models/content';
class ContentService {
  constructor(private model: typeof Content, private history: typeof History) {}

  public async getAll():Promise<IContent[]> {
    const result = await this.model.findAll();
    return result;
  }

  public async getById(id: number):Promise<IContent> {
    const content = await this.model.findByPk(id, {
      include: [
        {
          model: User,
          as: 'user',
          attributes: {
            exclude: ['id', 'password'],
          },
        }, {
          model: History,
          as: 'history',
          attributes: {
            exclude: ['id', 'contentId', 'created'],
          },
          separate: true,
          order: [['updated', 'desc']],
        },
      ],
    });

    if (!content) {
      throw new CustomError(errorCatalog.contentNotFound);
    }
    return content;
  }
}

export default ContentService;
