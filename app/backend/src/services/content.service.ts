import History from '../database/models/history';
import Content from '../database/models/content';
import User from '../database/models/user';
import IContent from '../interfaces/IContent';
import CustomError from '../errors/customError';
import errorCatalog from '../errors/errorCatalog';
import { returnPayload } from '../helpers/jwtToken';

class ContentService {
  constructor(private model: typeof Content, private history: typeof History) {}


  private async updateHistory({
    id,
    title,
    body,
    created,
    updated,
  }: IContent):Promise<void> {
    await this.history.create({
      title,
      body,
      created,
      updated,
      contentId: id,
    });
  }

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

  public async create(newContent: IContent, token: string) {
    const decodedId = returnPayload(token);
    const created = await this.model.create({ ...newContent, userId: decodedId });

    await this.updateHistory(created);
    return created;
  }

  public async update(newContent: IContent, token: string, id: number) {
    const exists = await this.verifyContentExistance(id);
    if (!exists) {
      throw new CustomError(errorCatalog.contentNotFound);
    }
    const decodedId = returnPayload(token);
    await this.model.update({ ...newContent, userId: decodedId }, {
      where: { id },
    });
    const updated = await this.getById(id);
    await this.updateHistory(updated);
  }

  public async deleteOne(id: number):Promise<void> {
    const exists = await this.verifyContentExistance(id);
    if (!exists) {
      throw new CustomError(errorCatalog.contentNotFound);
    }

    await this.model.destroy({ where: { id } });
  }

  public async massDelete(ids: number[]):Promise<void> {
    await Promise.all(ids.map((id) => this.deleteOne(id)));
  }
}

export default ContentService;
