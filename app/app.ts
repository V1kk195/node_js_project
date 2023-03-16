import express from 'express';
import * as dotenv from 'dotenv';

import { usersAPI } from './components/users';
import { openConnectionToDb } from '../db';

dotenv.config();

const app = express();
const port = process.env.PORT || 3100;

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`);

    await openConnectionToDb();
});

app.use(express.json());

app.use('/api/users', usersAPI);

app.get('/api', (req, res) => {
    res.send('Hello World!');
});
