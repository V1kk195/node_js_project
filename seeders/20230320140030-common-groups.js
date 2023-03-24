/** @type {import('sequelize-cli').Migration} */

const { v4 } = require('uuid');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Groups', [{
            id: v4(),
            name: 'admin',
            permissions: ['READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES'],
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: v4(),
            name: 'user',
            permissions: ['READ', 'SHARE', 'UPLOAD_FILES'],
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Groups', null, {});
    }
};
