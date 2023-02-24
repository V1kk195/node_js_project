import { Request, Response } from 'express';

import { createUserService, getUsersService, getUserService, updateUserService, deleteUserService } from './usersService';
import { User } from '../../types';

interface RequestWithUser extends Request {
    user?: User
}

export const findUserController = async (req, res, next, id): Promise<void> => {
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

export const updateUserController = async ({ user, params, body }: RequestWithUser, res: Response): Promise<void> => {
    const id = params.id;
    const userUpdated = await updateUserService(id, { ...user, ...body });

    res.json(userUpdated);
};

export const deleteUserController = async ({ user }: RequestWithUser, res: Response): Promise<void> => {
    if (user) {
        await deleteUserService(user);
    }

    res.status(204).json();
};
