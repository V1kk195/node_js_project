import { Attributes, CreationOptional, InferAttributes, InferCreationAttributes, Model } from 'sequelize';

export interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    id: CreationOptional<string>;
    login: string;
    password: string;
    age: number;
    isDeleted: CreationOptional<boolean>;
}

export type UserModelAttr = Attributes<UserModel>;
