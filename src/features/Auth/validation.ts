import {REQUIRED_FIELD} from '../../constants/validation';

export const loginValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if(value.trim()!=='steve.jobs@example.com') {
            return 'Неправильный логин'
        }
        return true
    }
}

export const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if(value.trim()!=='password') {
            return 'Неправильный пароль'
        }
        return true
    }
}