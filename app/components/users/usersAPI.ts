import { Router } from 'express';

import {
    createUserController,
    getUserController,
    getAllUsersController,
    updateUserController,
    deleteUserController, findUserController
} from './usersController';

const router = Router();

router.param('id', findUserController);

router.get('/', getAllUsersController);

router.post('/', createUserController);

router.get('/:id', getUserController);

router.put('/:id', updateUserController);

router.delete('/:id', deleteUserController);

export { router as usersAPI };
