import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { createUserService, getAllUsersService, getUserService } from './usersService';
import { User } from '../../types';


export const getUsersController = async (req: Request, res: Response): Promise<void> => {
    const users = await getAllUsersService();

    res.json(users);
};

export const getUserController = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const user = await getUserService(id);

    if (!user) {
        res.status(404).json({ message: `User ${id} not found` });
    }

    res.json(user);
};

export const createUserController = async (req: Request, res: Response): Promise<void> => {
    const userId = uuidv4();
    await createUserService(userId, { id: userId, isDeleted: false, ...req.body } as User);

    res.status(201).json();
};
