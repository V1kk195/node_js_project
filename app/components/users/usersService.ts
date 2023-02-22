import { usersDAL } from './usersDAL';
import { User, UserDAL } from '../../types';

export const getAllUsersService = async (): Promise<any[]> => {
    const users = Array.from(usersDAL).map(([id, user]) => {
        return user;
    });

    return users;
};

export const getUserService = async (id: string): Promise<User | undefined> => {
    return usersDAL.get(id);
};

export const createUserService = async (id: string, user: User): Promise<UserDAL> => {
    return usersDAL.set(id, user);
};
