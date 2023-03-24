import {
    Attributes,
    BelongsToManyAddAssociationMixin,
    CreationOptional,
    InferAttributes,
    InferCreationAttributes,
    Model
} from 'sequelize';
import { GroupModel } from './groups';

export interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    id: CreationOptional<string>;
    login: string;
    password: string;
    age: number;
    isDeleted: CreationOptional<boolean>;
    addGroup: BelongsToManyAddAssociationMixin<GroupModel, any>
}

export type UserModelAttr = Attributes<UserModel>;
