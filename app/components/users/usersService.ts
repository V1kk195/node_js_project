import { v4 as uuidv4 } from 'uuid';

import { usersDAL } from './usersDAL';
import { User, UserCreateRequestBody } from '../../types';


const getAllUsers = async (): Promise<User[]> => {
    const users = Array.from(usersDAL).map(([id, user]) => {
        return user;
    });

    return users;
};

export const getUserService = async (id: string): Promise<User | undefined> => {
    return usersDAL.get(id);
};

export const createUserService = async (userBody: UserCreateRequestBody): Promise<User | undefined> => {
    const id = uuidv4();

    usersDAL.set(id, { id, isDeleted: false, ...userBody });

    return usersDAL.get(id);
};

export const updateUserService = async (id: string, user: User): Promise<User | undefined> => {
    return usersDAL.set(id, user).get(id);
};

export const deleteUserService = async (user: User): Promise<User | undefined> => {
    return usersDAL.set(user.id, { ...user, isDeleted: true }).get(user.id);
};

const getAutoSuggestUsers = (users, loginSubstring, limit = 10) => {
    const filteredList = users.filter(user => user.login.toLowerCase().includes(loginSubstring.toLowerCase())).sort((a, b) => a.login.localeCompare(b.login));

    if (filteredList.length <= Number(limit)) {
        return filteredList;
    }

    return filteredList.slice(0, Number(limit));
};

export const getUsersService = async (loginSubstring, limit): Promise<User[]> => {
    const users = await getAllUsers();

    if (loginSubstring) {
        return getAutoSuggestUsers(users, loginSubstring, limit);
    }

    return users;
};
