'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'imagestatuses',
      [
        {
          name: 'Main-Image',
        },
        {
          name: 'Core-Image',
        },
        {
          name: 'Deactivated-Image',
        },
        {
          name: 'Waiting-For-Approval',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('imagestatuses', null, {});
  },
};
