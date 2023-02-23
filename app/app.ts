import express from 'express';

import { usersAPI } from './components/users';

const app = express();
const port = 3100;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.use(express.json());

app.use('/api/users', usersAPI);

app.get('/api', (req, res) => {
    res.send('Hello World!');
});
