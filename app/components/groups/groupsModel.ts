import { DataTypes } from 'sequelize';

import { sequelize } from '../../../db';
import { GroupModel } from '../../types/groups';

export const Group = sequelize.define<GroupModel>('Group', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    permissions: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    }
}, {});
