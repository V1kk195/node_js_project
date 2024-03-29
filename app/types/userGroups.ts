import { Attributes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';

export interface UserGroupModel extends Model<InferAttributes<UserGroupModel>, InferCreationAttributes<UserGroupModel>> {
    userId: string;
    groupId: string;
}

export type UserGroupModelAttr = Attributes<UserGroupModel>;
