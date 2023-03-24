/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('UserGroups', {
            userId: {
                type: Sequelize.UUID,
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            groupId: {
                type: Sequelize.UUID,
                references: {
                    model: 'Groups',
                    key: 'id'
                }
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('UserGroups');
    }
};
