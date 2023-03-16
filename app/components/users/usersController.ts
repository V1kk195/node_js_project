import { Request, Response } from 'express';

import { createUserService, getUsersService, getUserService, updateUserService, deleteUserService } from './usersService';
import { UserModelAttr } from '../../types';

interface RequestWithUser extends Request {
    user?: UserModelAttr
}

export const findUserController = async (req, res, next, id: string): Promise<void> => {
    const user = await getUserService(id);

    if (!user) {
        res.status(404).json({ message: `User ${id} not found` });
    } else {
        req.user = user;
        next();
    }
};

export const getAllUsersController = async (req: Request, res: Response): Promise<void> => {
    const { login, limit } = req.query;
    const users = await getUsersService(login, limit);

    res.json(users);
};

export const getUserController = async ({ user }: RequestWithUser, res: Response): Promise<void> => {
    res.json(user);
};

export const createUserController = async (req: Request, res: Response): Promise<void> => {
    const user = await createUserService(req.body);

    res.status(201).json(user);
};

export const updateUserController = async ({ params, body }: RequestWithUser, res: Response): Promise<void> => {
    const userUpdated = await updateUserService(params.id, body);

    res.json(userUpdated);
};

export const deleteUserController = async ({ user, params }: RequestWithUser, res: Response): Promise<void> => {
    if (user) {
        await deleteUserService(params.id, user);
    }

    res.status(204).json();
};
