'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'users',
      'password',
      {
        type: Sequelize.STRING,
        allowNull: false,
      }
    );
    await queryInterface.addColumn(
      'users',
      'status',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'users',
      'password',
    );
    await queryInterface.removeColumn(
      'users',
      'status',
    );
  }
};
