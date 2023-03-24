import express from 'express';
import * as dotenv from 'dotenv';

import { usersAPI } from './components/users';
import { groupsAPI } from './components/groups';
import { openConnectionToDb } from '../db';
import { associateUserWithGroup, userGroupAPI } from './components/userGroup';

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
        app.use('/api/groups', groupsAPI);
        app.use('/api/userGroup', userGroupAPI);

        app.get('/api', (req, res) => {
            res.send('Hello World!');
        });

        associateUserWithGroup();
        await openConnectionToDb();
    } catch (e) {
        console.log(e);
    }
};

init();

