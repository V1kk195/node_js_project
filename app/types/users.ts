import {
    Attributes,
    BelongsToManyAddAssociationMixin,
    CreationOptional,
    InferAttributes,
    InferCreationAttributes,
    Model, NonAttribute
} from 'sequelize';
import { GroupModel } from './groups';

export interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    id: CreationOptional<string>;
    login: string;
    password: string;
    age: number;
    isDeleted: CreationOptional<boolean>;
    // addGroup: BelongsToManyAddAssociationMixin<GroupModel, any>
    // groups?: Partial<Attributes<GroupModel>>[]
}

export type UserModelAttr = Attributes<UserModel>;
