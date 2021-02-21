import { ACTION_TYPES } from "../common/contants"
import * as taskApis from '../apis/task.api';
import { closeToast, showToast } from './toast.action';
import { showLoading, hideLoading } from './loading.action';
import { TOAST } from '../common/contants';
import { closeModal } from "./modal.action";
/**
 * Bước 1: Reset list task về rỗng: fetchListTask
 * Bước 2: Gọi Api lấy data: fetchListTaskRequest
 * Bước 3: Nếu thành công gọi fetchListTaskSuccess để cập nhật lại list với dữ liệu mới
 *         Nếu thất bại gọi fetchListTaskFail
 */
export const fetchListTaskRequest = () => {
    return dispatch => {
        dispatch(fetchListTask())
        dispatch(showLoading());
        taskApis.getList().then(response => {
            // dispatch(showToast(TOAST.SEVERITY.SUCCESS,
            //     'Thành công', 'Lấy dữ liệu thành công'));
            // dispatch(closeToast()); 
            dispatch(fetchListTaskSuccess(response.data))
            dispatch(hideLoading());
        }).catch(error => {
            dispatch(fetchListTaskFail(error))
            dispatch(showToast(TOAST.SEVERITY.ERROR,
                'Thất bại', 'Lấy dữ liệu thất bại'));
            dispatch(closeToast());
            // dispatch(hideLoading());
        });
    }
}

export const fetchListTask = () => {
    return {
        type: ACTION_TYPES.FETCH_LIST_TASK
    }
}

export const fetchListTaskSuccess = (response) => {
    return {
        type: ACTION_TYPES.FETCH_LIST_TASK_SUCCESS,
        payload: {
            tasks: response
        }
    }
}

export const fetchListTaskFail = (error) => {
    return {
        type: ACTION_TYPES.FETCH_LIST_TASK_FAIL,
        payload: {
            error
        }
    }
}

export const searchTask = (search) => {
    return {
        type: ACTION_TYPES.SEARCH_TASK,
        payload: {
            search
        }
    }
}

export const searchTaskSuccess = (response) => {
    return {
        type: ACTION_TYPES.SEARCH_TASK_SUCCESS,
        payload: {
            data: response
        }
    }
}

export const searchTaskFail = (error) => {
    return {
        type: ACTION_TYPES.SEARCH_TASK_FAIL,
        payload: {
            error
        }
    }
}

export const addTaskRequest = (task) => {
    return {
        type: ACTION_TYPES.ADD_TASK,
        payload: {
            task
        }
    }
}

// export const addTaskRequest = (task) => {
//     return dispatch => {
//         dispatch(showLoading);
//         taskApis.addTask({task}).then(res => {
//             dispatch(showToast(TOAST.SEVERITY.SUCCESS,
//                 'Thành công', 'Thêm dữ liệu thành công'));
//             dispatch(closeToast());
//             dispatch(hideLoading);
//             dispatch(closeModal);
//         }).catch(error => {
//             dispatch(hideLoading);
//             dispatch(addTaskFail(error));
//             dispatch(showToast(TOAST.SEVERITY.ERROR,
//                 'Thất bại', 'Lấy dữ liệu thất bại'));
//             dispatch(closeToast());
//         });
//     }
// }

export const addTaskSuccess = (response) => {
    return {
        type: ACTION_TYPES.ADD_TASK_SUCCESS,
        payload: {
            task: response
        }
    }
}

export const addTaskFail = (error) => {
    return {
        type: ACTION_TYPES.ADD_TASK_FAIL,
        payload: {
            error
        }
    }
}

export const deleteTaskRequest = (id) => {
    return {
        type: ACTION_TYPES.DELETE_TASK,
        payload : {
            id
        }
    }
}

export const deleteTaskSuccess = (id) => {
    return {
        type: ACTION_TYPES.DELETE_TASK_SUCCESS,
        payload: {
            id
        }
    }
}

export const deleteTaskFail = (error) => {
    return {
        type: ACTION_TYPES.DELETE_TASK_FAIL,
        payload: {
            error
        }
    }
}

export const setEditTask = (task) => {
    return {
        type: ACTION_TYPES.SET_EDIT_TASK,
        payload: {
            task
        }
    }
}

export const editTaskRequest = (task) => {
    return {
        type: ACTION_TYPES.EDIT_TASK,
        payload: {
            task
        }
    }
}

export const editTaskSuccess = (task) => {
    return {
        type: ACTION_TYPES.EDIT_TASK_SUCCESS,
        payload: {
            task
        }
    }
}


export const editTaskFail = (error) => {
    return {
        type: ACTION_TYPES.EDIT_TASK_FAIL,
        payload: {
            error
        }
    }
}