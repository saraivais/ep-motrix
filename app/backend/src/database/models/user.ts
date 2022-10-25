import { Model, DataTypes } from 'sequelize';
import db from '.';

class User extends Model {
  id!: number;

  email!: string;

  password!: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  modelName: 'users',
  sequelize: db,
  timestamps: false,
});

export default User;
