import { Attributes, CreationOptional, InferAttributes, InferCreationAttributes, Model } from 'sequelize';

export interface UserGroupsModel extends Model<InferAttributes<UserGroupsModel>, InferCreationAttributes<UserGroupsModel>> {
    userId: string;
    groupId: string;
}

export type UserModelAttr = Attributes<UserGroupsModel>;
