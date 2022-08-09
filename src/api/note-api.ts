import {AxiosResponse} from 'axios'
import {instance} from './instance'
import {LoginType} from '../features/Auth';

export const authAPI = {
    login(data: LoginType) {
        return instance.post<AxiosResponse<any>>('login', data)
    }
}
