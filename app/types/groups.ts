import { Attributes, CreationOptional, InferAttributes, InferCreationAttributes, Model } from 'sequelize';

export type Permission = 'READ' | 'WRITE' | 'DELETE' | 'SHARE' | 'UPLOAD_FILES';

export interface GroupModel extends Model<InferAttributes<GroupModel>, InferCreationAttributes<GroupModel>> {
    id: CreationOptional<string>;
    name: string;
    permissions: Permission[]
}

export type GroupModelAttr = Attributes<GroupModel>;

