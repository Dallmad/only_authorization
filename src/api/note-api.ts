import {AxiosResponse} from 'axios'
import {instance} from './instance'

export const authAPI = {
    auth(data: any) {
        return instance.post<AxiosResponse<any>>('createNote', data)
    }
}
