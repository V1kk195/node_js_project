import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { createUserService, getUsersService, getUserService, updateUserService } from './usersService';
import { User } from '../../types';

interface RequestWithUser extends Request {
    user?: User
}

export const findUserController = async (req, res, next, id): Promise<void> => {
    req.user = await getUserService(id);
    next();
};

export const getAllUsersController = async (req: Request, res: Response): Promise<void> => {
    const { login, limit } = req.query;
    const users = await getUsersService(login, limit);

    res.json(users);
};

export const getUserController = async ({ user, params }: RequestWithUser, res: Response): Promise<void> => {
    const id = params.id;

    if (!user) {
        res.status(404).json({ message: `User ${id} not found` });
    } else {
        res.json(user);
    }
};

export const createUserController = async (req: Request, res: Response): Promise<void> => {
    const userId = uuidv4();
    await createUserService(userId, { id: userId, isDeleted: false, ...req.body } as User);

    res.status(201).json();
};

export const updateUserController = async ({ user, params, body }: RequestWithUser, res: Response): Promise<void> => {
    const id = params.id;

    if (!user) {
        res.status(404).json({ message: `User ${id} not found` });
    } else {
        const users = await updateUserService(id, { ...user, ...body });

        res.json(users.get(id));
    }
};

export const deleteUserController = async ({ user, params }: RequestWithUser, res: Response): Promise<void> => {
    const id = params.id;

    if (!user) {
        res.status(404).json({ message: `User ${id} not found` });
    } else {
        await updateUserService(id, { ...user, isDeleted: true });

        res.status(204).json();
    }
};
