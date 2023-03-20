import Ajv, { JSONSchemaType } from 'ajv';

import { GroupModelAttr } from '../../types/groups';

const ajv = new Ajv({ allErrors: true });

const schema:  JSONSchemaType<GroupModelAttr> = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        permissions: {
            type: 'array',
            items: { type: 'string' }
        }
    },
    required: ['name', 'permissions'],
    additionalProperties: false
};

export const validate = ajv.compile(schema);

