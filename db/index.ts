import { Sequelize } from 'sequelize';
import CONFIG from '../config/config.js';

export const sequelize = new Sequelize(CONFIG.development);

export const openConnectionToDb = async () => {
    try {
        await sequelize.authenticate();

        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export const closeConnection = () => {
    return sequelize.close();
};
