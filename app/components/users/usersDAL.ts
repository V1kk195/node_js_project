import { Sequelize, DataTypes } from 'sequelize';

import { UserModel } from '../../types';

const sequelize = new Sequelize('sqlite::memory:');

export const User = sequelize.define<UserModel>('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false
        // unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    // Other model options go here
});

(async () => {
    await sequelize.sync();
    console.log('All models have been synchronized');
})();
