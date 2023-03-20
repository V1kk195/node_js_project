import { Request, Response } from 'express';

import { createGroupService, deleteGroupService, getAllGroupsService, getGroupService, updateGroupService } from './groupService';
import { GroupModelAttr } from '../../types/groups';

interface RequestWithGroup extends Request {
    group?: GroupModelAttr
}
export const getAllGroupsController = async (req: Request, res: Response): Promise<void> => {
    const groups = await getAllGroupsService();

    res.json(groups);
};

export const findGroupController = async (req, res, next, id: string): Promise<void> => {
    const group = await getGroupService(id);

    if (!group) {
        res.status(404).json({ message: `Group ${id} not found` });
    } else {
        req.group = group;
        next();
    }
};

export const getGroupController = async (req: RequestWithGroup, res: Response): Promise<void> => {
    res.json(req.group);
};

export const createGroupController = async (req: Request, res: Response): Promise<void> => {
    const group = await createGroupService(req.body);

    res.status(201).json(group);
};

export const updateGroupController = async ({ params, body }: RequestWithGroup, res: Response): Promise<void> => {
    const groupUpdated = await updateGroupService(params.id, body);

    res.json(groupUpdated);
};

export const deleteGroupController = async ({ group, params }: RequestWithGroup, res: Response): Promise<void> => {
    if (group) {
        await deleteGroupService(params.id);
    }

    res.status(204).json();
};
