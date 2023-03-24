import { Request, Response } from 'express';
import { addUserToGroupService } from './userGroupService';

export const addUserToGroupController = async (req: Request, res: Response): Promise<void> => {
    const user = await addUserToGroupService(req.body);

    res.json(user);
};
