import { Model, DataTypes } from 'sequelize';
import db from '.';

class History extends Model {
  id!: number;

  contentId!: number;

  title!: string;

  body!: string;

  updated!: Date;

  created!: Date;
}

History.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  contentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'content_id',
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  underscored: true,
  modelName: 'histories',
  sequelize: db,
  timestamps: false,
});

export default History;
