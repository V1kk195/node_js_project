/** @type {import('sequelize-cli').Migration} */
const { v4 } = require('uuid');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', [{
            id: v4(),
            login: 'demo_user',
            password: '000000',
            age: 24,
            isDeleted: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', { login: 'demo_user' }, {});
    }
};
