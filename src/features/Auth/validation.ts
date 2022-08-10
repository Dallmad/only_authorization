import {
    EMAIL_CONDITION, PASSWORD_CONDITION,
    REQUIRED_FIELD,
    WRONG_LOGIN,
    WRONG_PASSWORD
} from '../../constants/validation'

export const loginValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if (!value.match(EMAIL_CONDITION)) {
            return WRONG_LOGIN
        }
        return true
    }
}

export const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if (!value.match(PASSWORD_CONDITION)) {
            return WRONG_PASSWORD
        }
        return true
    }
}