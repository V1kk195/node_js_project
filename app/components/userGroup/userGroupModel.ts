import { DataTypes } from 'sequelize';

import { sequelize } from '../../../db';
import { User } from '../users';
import { Group } from '../groups';
import { UserGroupModel } from '../../types/userGroups';

export const UserGroups = sequelize.define<UserGroupModel>('UserGroups', {
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

export const associateUserWithGroup = () => {
    User.belongsToMany(Group, { through: UserGroups, foreignKey: 'userId' });
    Group.belongsToMany(User, { through: UserGroups,  foreignKey: 'groupId' });
};

