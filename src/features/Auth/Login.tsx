import React from 'react';
import {SubmitHandler, useForm, Controller, useFormState} from 'react-hook-form';
import {loginValidation, passwordValidation} from './validation';
import {useTypedDispatch} from '../../state/store';
import {login} from '../../state/middlewares/auth';
import {LoginWrapper, StyledCheckbox, StyledErrorButton, StyledInput} from './Login.styles';
import {VALID_EMAIL} from '../../constants/validation';

export type LoginType = {
    login: string,
    password: string,
    checkbox: boolean
};

export const Login: React.FC = () => {

    const dispatch = useTypedDispatch()
    const {handleSubmit, control} = useForm<LoginType>();
    const {errors} = useFormState({control})

    console.log('errors', errors)
    const onSubmit: SubmitHandler<LoginType> = data => dispatch(login(data));


    return (
        <LoginWrapper>

            {false && <StyledErrorButton>
                <label>!</label>
                Пользователя {VALID_EMAIL} не существует
            </StyledErrorButton>}
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <h4>Логин</h4>
                </div>
                <Controller
                    control={control}
                    name={'login'}
                    rules={loginValidation}
                    render={({field}) => (
                        <StyledInput
                            type="text"
                            name={'login'}
                            value={field.value || ''}
                            onChange={(e) => field.onChange(e)}
                        />
                    )}
                />
                <div>
                    {errors.login && errors.login.message}
                </div>
                <div>
                    <h4>Пароль</h4>
                </div>
                <Controller
                    control={control}
                    name={'password'}
                    rules={passwordValidation}
                    render={({field}) => (
                        <StyledInput
                            type="password"
                            name={'password'}
                            value={field.value || ''}
                            onChange={(e) => field.onChange(e)}
                        />
                    )}
                />
                <div>
                    {errors.password && errors.password.message}
                </div>
                <div>
                    <Controller
                        control={control}
                        name={'checkbox'}
                        render={({field}) => (
                            <StyledCheckbox
                                type='checkbox'
                                name={'checkbox'}
                                checked={field.value || false}
                                onChange={(e) => field.onChange(e)}
                            />
                        )}
                    />
                    <label>Запомнить меня</label>
                </div>

                <button type={'submit'}>
                    Войти
                </button>


            </form>
        </LoginWrapper>
    )
}