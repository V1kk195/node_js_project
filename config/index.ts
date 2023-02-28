import { Options } from 'sequelize';

type Config = {
    db: Options,
}
export const CONFIG: Config = {
    db: {
        database: 'node_project_db',
        username: 'postgres',
        password: 'password',
        host: 'localhost',
        port: 5440,
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
};
