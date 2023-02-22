import express from 'express';
import { createUserController, getUserController, getUsersController } from './usersController';

const router = express.Router();

router.get('/', getUsersController);

router.get('/:id', getUserController);

router.post('/', createUserController);

router.put('/:id', (req, res) => {
    res.send('User updated');
});

router.delete('/:id', (req, res) => {
    res.send('User deleted');
});

export { router as usersAPI };
