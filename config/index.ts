import { Options } from 'sequelize';

type Config = {
    db: Options,
}
export const CONFIG: Config = {
    db: {
        database: 'node_project',
        username: 'admin',
        password: 'password',
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
};
