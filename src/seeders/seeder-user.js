'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'Hoang',
      lastName: 'Viet',
      address: 'Viet Nam',
      phonenumber: '0338916610',
      gender: 1,
      image: 'Nodejs/src/public/Anh-4k-Daominhha.jpg',
      roleId: 'R1',
      positionId: 'P0',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
