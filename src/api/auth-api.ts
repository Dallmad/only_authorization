import {AxiosResponse} from 'axios'
import {instance} from './instance'
import {LoginType} from '../common/types';

export const authAPI = {
    login(data: LoginType) {
        return instance.post<AxiosResponse<any>>('login', data)
    }
}
