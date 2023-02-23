import { ErrorObject } from 'ajv/lib/types';
import { ValidateFunction } from 'ajv';

const transformErrorsResponse = (schemaErrors: ErrorObject[]) => {
    const errors = schemaErrors?.map(error => ({
        path: error.instancePath,
        message: error.message
    }));

    return {
        status: 'failed',
        errors
    };
};

export const validateSchema = <T>(schemaValidator: ValidateFunction<T>) => {
    return async (req, res, next) => {
        const isValid = schemaValidator(req.body);

        if (!isValid && schemaValidator.errors) {
            res.status(400).json(transformErrorsResponse(schemaValidator.errors));
        } else {
            next();
        }
    };
};
