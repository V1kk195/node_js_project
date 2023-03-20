import { CreationAttributes } from 'sequelize';

import { GroupModel } from '../../types/groups';
import { Group } from './groupsModel';

export const getAllGroupsService = async (): Promise<GroupModel[]> => {
    return await Group.findAll();
};

export const getGroupService = async (id: string): Promise<GroupModel | null> => {
    const group = await Group.findOne({ where: { id } });

    return group || null;
};

export const createGroupService = async (groupBody: CreationAttributes<GroupModel>): Promise<GroupModel> => {
    return await Group.create(groupBody);
};

export const updateGroupService = async (id: string, groupData: CreationAttributes<GroupModel>): Promise<GroupModel | null> => {
    await Group.update(groupData, {
        where: { id }
    });

    return await getGroupService(id);
};

export const deleteGroupService = async (id: string): Promise<void> => {
    await Group.destroy({
        where: { id }
    });
};

