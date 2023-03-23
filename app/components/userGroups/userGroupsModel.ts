import { DataTypes } from 'sequelize';

import { sequelize } from '../../../db';
import { User } from '../users';
import { Group } from '../groups';
import { UserGroupsModel } from '../../types/userGroups';

export const UserGroups = sequelize.define<UserGroupsModel>('UserGroups', {
    userId: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: 'id'
        }
    },
    groupId: {
        type: DataTypes.UUID,
        references: {
            model: Group,
            key: 'id'
        }
    }
}, { timestamps: false });

User.belongsToMany(Group, { through: UserGroups });
Group.belongsToMany(User, { through: UserGroups });
