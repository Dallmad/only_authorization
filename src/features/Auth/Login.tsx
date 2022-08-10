import React, {useEffect} from 'react'
import {SubmitHandler, useForm, Controller, useFormState} from 'react-hook-form'
import {loginValidation, passwordValidation} from './validation'
import {AppRootStateType, useTypedDispatch} from '../../state/store'
import {login} from '../../state/middlewares/auth'
import {LoginWrapper, StyledCheckbox, StyledErrorButton, StyledInput} from './Login.styles'
import {VALID_EMAIL, VALID_PASSWORD} from '../../constants/validation'
import {setError} from '../../state/actions/auth'
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
import {LoginType} from '../../common/types'

export const Login: React.FC = () => {

    const dispatch = useTypedDispatch()
    const {handleSubmit, control} = useForm<LoginType>()
    const {errors} = useFormState({control})
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.auth.isLoading)
    const serverError = useSelector<AppRootStateType, string>(state => state.auth.error)

    const onSubmit: SubmitHandler<LoginType> = data => {
        if (data.login !== VALID_EMAIL || data.password !== VALID_PASSWORD) {
            dispatch(setError(data.login))
            const timer = setTimeout(() => {
                dispatch(setError(''))
            }, 2000);
            return () => clearTimeout(timer)
        } else dispatch(login(data))
    }

    useEffect(() => {
    }, [isLoggedIn, isLoading])

    if (isLoggedIn) {
        return <Navigate to="/profile"/>
    }

    return (
        <LoginWrapper>

            {serverError && <StyledErrorButton>
                <label>!</label>
                Пользователя {serverError} не существует
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
                            error={!!errors.login}
                        />
                    )}
                />
                <p>
                    {errors.login && errors.login.message}
                </p>

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
                            error={!!errors.password}
                        />
                    )}
                />
                <p>
                    {errors.password && errors.password.message}
                </p>

                <div>
                    <Controller
                        control={control}
                        name={'checkbox'}
                        render={({field}) => (
                            <StyledCheckbox
                                type="checkbox"
                                name={'checkbox'}
                                checked={field.value || false}
                                onChange={(e) => field.onChange(e)}
                            />
                        )}
                    />
                    <label>Запомнить меня</label>
                </div>

                <button type={'submit'} disabled={isLoading}>
                    Войти
                </button>

            </form>
        </LoginWrapper>
    )
}