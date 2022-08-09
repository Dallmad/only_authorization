import React from 'react';
import {SubmitHandler, useForm, Controller, useFormState} from 'react-hook-form';
import {loginValidation, passwordValidation} from './validation';
import {useTypedDispatch} from '../../state/store';
import {login} from '../../state/middlewares/auth';

export type LoginType = {
    login: string,
    password: string,
    checkbox: boolean
};

export const Login: React.FC = () => {

    const dispatch = useTypedDispatch()
    const {handleSubmit, control} = useForm<LoginType>();
    const {errors} = useFormState({control})

    console.log('errors',errors)
    const onSubmit: SubmitHandler<LoginType> = data => dispatch(login(data));


    return (
        <div>
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
                        <input
                            type="text"
                            name={'login'}
                            value={field.value||''}
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
                        <input
                            type="password"
                            name={'password'}
                            value={field.value||''}
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
                            <input
                                type='checkbox'
                                name={'checkbox'}
                                checked={field.value||false}
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
        </div>
    )
}