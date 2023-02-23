import { usersDAL } from './usersDAL';
import { User, UserDAL } from '../../types';


export const getAllUsers = async (): Promise<User[]> => {
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

export const updateUserService = async (id: string, user: User): Promise<UserDAL> => {
    return usersDAL.set(id, user);
};

const getAutoSuggestUsers = (users, loginSubstring, limit = 10) => {
    const filteredList = users.filter(user => user.login.toLowerCase().includes(loginSubstring.toLowerCase())).sort((a, b) => a.login.localeCompare(b.login));

    if (filteredList.length <= Number(limit)) {
        return filteredList;
    }

    return filteredList.slice(0, Number(limit));
};

export const getUsersService = async (loginSubstring, limit) => {
    const users = await getAllUsers();

    if (loginSubstring) {
        return getAutoSuggestUsers(users, loginSubstring, limit);
    }

    return users;
};
