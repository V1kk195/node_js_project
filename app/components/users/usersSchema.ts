import Ajv, { JSONSchemaType } from 'ajv';

import { UserModelAttr } from '../../types';

const ajv = new Ajv({ allErrors: true });

const schema:  JSONSchemaType<UserModelAttr> = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        login: { type: 'string' },
        password: { type: 'string', pattern: '[A-Za-z0-9]+' },
        age: { type: 'integer', minimum: 4, maximum: 130 },
        isDeleted: { type: 'boolean' }
    },
    required: ['login', 'password', 'age'],
    additionalProperties: false
};

export const validate = ajv.compile(schema);

