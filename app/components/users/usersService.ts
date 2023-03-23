import { CreationAttributes } from 'sequelize';

import { User } from './users.model';
import { UserModel, UserModelAttr } from '../../types';
import { Group } from '../groups';


const getAllUsers = async (): Promise<UserModel[]> => {
    return await User.findAll({ where: { isDeleted: false } });
};

export const getUserService = async (id: string): Promise<UserModel | null> => {
    const user = await User.findOne({ where: { id, isDeleted: false } });

    return user || null;
};

export const createUserService = async (userBody: CreationAttributes<UserModel>): Promise<UserModel> => {
    return await User.create(userBody);
};

export const updateUserService = async (id: string, userData: CreationAttributes<UserModel>): Promise<UserModel | null> => {
    await User.update(userData, {
        where: { id }
    });

    return await getUserService(id);
};

export const deleteUserService = async (id: string, user: UserModelAttr): Promise<UserModelAttr | null> => {
    await User.update({ ...user, isDeleted: true }, {
        where: { id }
    });

    return await getUserService(id);
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
