import { CreationAttributes } from 'sequelize';

import { User, usersDAL } from './usersDAL';
import { UserModel, UserType } from '../../types';


const getAllUsers = async (): Promise<UserModel[]> => {
    const users = await User.findAll();

    return users;
};

export const getUserService = async (id: string): Promise<UserModel | null> => {
    const user = await User.findOne({ where: { id } });

    return user || null;
};

export const createUserService = async (userBody: CreationAttributes<UserModel>): Promise<UserModel> => {
    const user = await User.create(userBody);

    console.log(user.toJSON());
    return user;
};

export const updateUserService = async (id: string, user: UserType): Promise<UserType | undefined> => {
    return usersDAL.set(id, user).get(id);
};

export const deleteUserService = async (user: UserType): Promise<UserType | undefined> => {
    return usersDAL.set(user.id, { ...user, isDeleted: true }).get(user.id);
};

const getAutoSuggestUsers = (users: UserModel[], loginSubstring: string, limit = 10) => {
    const filteredList = users.filter(user => user.login.toLowerCase().includes(loginSubstring.toLowerCase())).sort((a, b) => a.login.localeCompare(b.login));

    if (filteredList.length <= Number(limit)) {
        return filteredList;
    }

    return filteredList.slice(0, Number(limit));
};

export const getUsersService = async (loginSubstring, limit): Promise<UserModel[]> => {
    const users = await getAllUsers();

    if (loginSubstring) {
        return getAutoSuggestUsers(users, loginSubstring, limit);
    }

    return users;
};
