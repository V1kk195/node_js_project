import { Router } from 'express';

import {
    createGroupController, deleteGroupController,
    findGroupController,
    getAllGroupsController,
    getGroupController, updateGroupController
} from './groupsController';
import { validateSchema } from '../../validators';
import { GroupModelAttr } from '../../types/groups';
import { validate } from './groupsSchema';

const router = Router();

router.param('id', findGroupController);

router.get('/', getAllGroupsController);

router.post('/', validateSchema<GroupModelAttr>(validate), createGroupController);

router.get('/:id', getGroupController);

router.put('/:id', validateSchema<GroupModelAttr>(validate), updateGroupController);

router.delete('/:id', deleteGroupController);

export { router as groupsAPI };
