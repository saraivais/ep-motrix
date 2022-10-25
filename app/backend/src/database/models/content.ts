import { Model, DataTypes } from 'sequelize';
import db from '.';
import History from './history';
import User from './user';

class Content extends Model {
  id!: number;

  userId!: number;

  title!: string;

  body!: string;
}

Content.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  underscored: true,
  modelName: 'contents',
  sequelize: db,
  timestamps: true,
  createdAt: 'created',
  updatedAt: 'updated',
});

export default Content;
