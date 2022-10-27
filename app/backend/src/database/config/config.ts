/* eslint-disable import/no-import-module-exports */
import 'dotenv/config';
import { Options } from 'sequelize';

const options: Options = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 4001,
  database: 'MOTRIX_CONTENT',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = options;
