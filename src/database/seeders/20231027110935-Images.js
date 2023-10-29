'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Images',
      [
        {
          imgURL: 'https://picsum.photos/200/300',
          user_id: 1,
          imageStatus_id: 1,
        },
        {
          imgURL: 'https://picsum.photos/200/300',
          user_id: 2,
          imageStatus_id: 1,
        },
        {
          imgURL: 'https://picsum.photos/200/300',
          user_id: 3,
          imageStatus_id: 1,
        },
        {
          imgURL: 'https://picsum.photos/200/300',
          user_id: 4,
          imageStatus_id: 1,
        },
        {
          imgURL: 'https://picsum.photos/200/300',
          user_id: 1,
          imageStatus_id: 2,
        },
        {
          imgURL: 'https://picsum.photos/200/300',
          user_id: 2,
          imageStatus_id: 2,
        },
        {
          imgURL: 'https://picsum.photos/200/300',
          user_id: 3,
          imageStatus_id: 2,
        },
        {
          imgURL: 'https://picsum.photos/200/300',
          user_id: 4,
          imageStatus_id: 2,
        },
        {
          imgURL: 'https://picsum.photos/200/300',
          user_id: 1,
          imageStatus_id: 3,
        },
        {
          imgURL: 'https://picsum.photos/200/300',
          user_id: 2,
          imageStatus_id: 3,
        },
        {
          imgURL: 'https://picsum.photos/200/300',
          user_id: 3,
          imageStatus_id: 3,
        },
        {
          imgURL: 'https://picsum.photos/200/300',
          user_id: 4,
          imageStatus_id: 3,
        },
        {
          imgURL: 'https://picsum.photos/200/300',
          user_id: 1,
          imageStatus_id: 4,
        },
        {
          imgURL: 'https://picsum.photos/200/300',
          user_id: 2,
          imageStatus_id: 4,
        },
        {
          imgURL: 'https://picsum.photos/200/300',
          user_id: 3,
          imageStatus_id: 4,
        },
        {
          imgURL: 'https://picsum.photos/200/300',
          user_id: 4,
          imageStatus_id: 4,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  },
};
