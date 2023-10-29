'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'John Doe',
          email: 'JT@mail.de',
          password: '1234',
          dayOfBirth: new Date('1988-01-01'),
          token: '1234',
        },
        {
          username: 'Meha Leha',
          email: 'irgendwas@das.de',
          password: '1234',
          dayOfBirth: new Date('2000-01-01'),
          token: '1234',
        },
        {
          username: 'Keen Lee',
          email: 'test@test.de',
          password: '1234',
          dayOfBirth: new Date('1998-01-01'),
          token: '1234',
        },
        {
          username: 'AnyBody',
          email: 'any@one.de',
          password: '1234',
          dayOfBirth: new Date('1998-01-01'),
          token: '1234',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
