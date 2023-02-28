import { Router } from 'express';

import {
    createUserController,
    getUserController,
    getAllUsersController,
    updateUserController,
    deleteUserController, findUserController
} from './usersController';
import { validateSchema } from '../../validators';
import { validate } from './usersSchema';
import { UserModelAttr } from '../../types';

const router = Router();

router.param('id', findUserController);

router.get('/', getAllUsersController);

router.post('/', validateSchema<UserModelAttr>(validate), createUserController);

router.get('/:id', getUserController);

router.put('/:id', validateSchema<UserModelAttr>(validate), updateUserController);

router.delete('/:id', deleteUserController);

export { router as usersAPI };
