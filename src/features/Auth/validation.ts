import {REQUIRED_FIELD, VALID_EMAIL, VALID_PASSWORD, WRONG_LOGIN, WRONG_PASSWORD} from '../../constants/validation';

export const loginValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if(value.trim()!==VALID_EMAIL) {
            return WRONG_LOGIN
        }
        return true
    }
}

export const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if(value.trim()!==VALID_PASSWORD) {
            return WRONG_PASSWORD
        }
        return true
    }
}