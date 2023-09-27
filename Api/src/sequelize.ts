import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'santiago12',
  database: 'login',
  logging: false,
});

export default sequelize;
