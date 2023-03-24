import { Router } from 'express';
import { addUserToGroupController } from './userGroupController';

const router = Router();

router.post('/add_user_to_group', addUserToGroupController);

export { router as userGroupAPI };
