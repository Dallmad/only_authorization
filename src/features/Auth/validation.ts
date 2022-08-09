export const loginValidation = {
    required: 'Обязательное поле',
    validate: (value: string) => {
        if(value.match('steve.jobs@example.com')) {
            return 'Неправильный логин'
        }
        return true
    }
}

export const passwordValidation = {
    required: 'Обязательное поле',
    validate: (value: string) => {
        if(value.match('password')) {
            return 'Неправильный пароль'
        }
        return true
    }
}