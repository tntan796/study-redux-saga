import axios from 'axios';
class AxiosBaseService {
    constructor() {
        const instance = axios.create();
        this.instance = instance;
    }

    handleSuccess(response) {
        return response;
    }

    handleError(error) {
        return Promise.reject(error);
    }

    get(url) {
        return this.instance.get(`${API_ENDPOINT}/${url }`);
    }
}

export default new AxiosBaseService();