import express from 'express';
import * as dotenv from 'dotenv';

import { usersAPI } from './components/users';
import { openConnectionToDb } from '../db';

dotenv.config();

const init = async () => {
    try {
        const app = express();
        const port = process.env.PORT || 3100;

        app.listen(port,  () => {
            console.log(`Example app listening on port ${port}`);
        });

        app.use(express.json());

        app.use('/api/users', usersAPI);

        app.get('/api', (req, res) => {
            res.send('Hello World!');
        });

        await openConnectionToDb();
    } catch (e) {
        console.log(e);
    }
};

init();

