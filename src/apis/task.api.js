import {API_ENDPOINT} from '../common/contants';
import axiosBaseService from '../services/axios-base.service';

export const getList = () => {
    return axiosBaseService.get(`${API_ENDPOINT}/tasks`);
}

export const addTask = (task) => {
    return axiosBaseService.post(`${API_ENDPOINT}/tasks`, task);
}

export const filterTask = (keyword) => {
    return axiosBaseService.get(`${API_ENDPOINT}/search-task?keyword=${keyword}`);
}

export const deleteTask = (id) => {
    return axiosBaseService.delete(`${API_ENDPOINT}/task/${id}`)
}