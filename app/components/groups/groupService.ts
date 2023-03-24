import { CreationAttributes } from 'sequelize';

import { GroupModel, GroupName } from '../../types/groups';
import { Group } from './groupsModel';
import { Attributes, FindOptions } from 'sequelize/types/model';

export const getAllGroupsService = async (): Promise<GroupModel[]> => {
    return await Group.findAll();
};

export const getGroupService = async (id: string): Promise<GroupModel | null> => {
    const group = await Group.findOne({ where: { id } });

    return group || null;
};

export const getGroupByNameService = async (name: GroupName, options?: FindOptions<Attributes<GroupModel>>): Promise<GroupModel | null> => {
    const group = await Group.findOne({ where: { name }, ...options });

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

