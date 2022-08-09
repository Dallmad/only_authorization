import React from 'react';
import {SubmitHandler, useForm, Controller, useWatch, Control, useFormState} from 'react-hook-form';
import {loginValidation, passwordValidation} from './validation';

type InputsType = {
    login: string,
    password: string,
};

export const Authorization: React.FC = () => {
    const {handleSubmit, control} = useForm<InputsType>();
    const {error}:any = useFormState({control})

    console.log('error',error)
    const onSubmit: SubmitHandler<InputsType> = data => console.log(data);


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
                {error ? error.message : ''}
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
                {error ? error.message : ''}
                <div>
                    <input
                        type="checkbox"
                        name={'checkbox'}
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