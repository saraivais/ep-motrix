'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        email: 'admin@admin.com',
        password: '$2b$10$qEGGtrFFKNYt8HrR86CaTeui5gfNHdwW3a3QDB1nVbI5XXLr9f1.m',
        // senha: iamadmin
      },
      {
        email: 'motrix@one.com',
        password: '$2b$10$Y3/JvjSmMhun9Wo9FqPUHOyjjN1pmOt/mJPM53FkqHKD7TCNnfl46',
        // senha: motrix1
      },
      {
        email: 'motrix@two.com',
        password: '$2b$10$vE.qpqGDL366W0x0.e7YDOFh2uEKlbsPKh9ej.SznClotGEcdNREG',
        // senha: motrix2
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
