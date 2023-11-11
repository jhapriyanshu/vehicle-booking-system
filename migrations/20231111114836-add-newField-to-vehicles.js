'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Vehicles', 'model', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('Vehicles', 'numWheels', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
    await queryInterface.addColumn('Vehicles', 'vehicleTypeId', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
    
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Vehicles', 'model');
    await queryInterface.removeColumn('Vehicles', 'numWheels');
    await queryInterface.removeColumn('Vehicles', 'vehicleTypeId');
  
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
