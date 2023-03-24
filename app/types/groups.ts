import { Attributes, CreationOptional, InferAttributes, InferCreationAttributes, Model } from 'sequelize';

export type Permission = 'READ' | 'WRITE' | 'DELETE' | 'SHARE' | 'UPLOAD_FILES';

export type GroupName = 'user' | 'admin';

export interface GroupModel extends Model<InferAttributes<GroupModel>, InferCreationAttributes<GroupModel>> {
    id: CreationOptional<string>;
    name: GroupName;
    permissions: Permission[]
}

export type GroupModelAttr = Attributes<GroupModel>;

