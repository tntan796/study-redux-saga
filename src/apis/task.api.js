import {API_ENDPOINT} from '../common/contants';
import axiosBaseService from '../services/axios-base.service';

export const getList = () => {
    return axiosBaseService.get(`${API_ENDPOINT}/tasks`);
}