import { sequelize } from '../../../db';
import { UserGroups } from './userGroupModel';
import { getGroupByNameService } from '../groups/groupService';
import { UserGroupModel } from '../../types/userGroups';

export const addUserToGroupService = async ({ userId, groupName }): Promise<UserGroupModel | null> => {
    try {
        const result = await sequelize.transaction(async (t) => {
            const group = await getGroupByNameService(groupName);
            let userGroup;

            if (group) {
                userGroup = await UserGroups.create({
                    userId,
                    groupId: group?.id
                }, { transaction: t });
            }

            return userGroup;
        });

        return result;
    } catch (e) {
        console.log(e);

        return null;
    }
};
