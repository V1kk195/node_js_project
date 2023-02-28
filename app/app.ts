import express from 'express';

import { usersAPI } from './components/users';
import { openConnectionToDb } from '../db';

const app = express();
const port = 3100;

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`);

    await openConnectionToDb();
});

app.use(express.json());

app.use('/api/users', usersAPI);

app.get('/api', (req, res) => {
    res.send('Hello World!');
});
