import { ACTION_TYPES } from "../common/contants"

export const fetchListTask = () => {
    return {
        type: ACTION_TYPES.FETCH_LIST_TASK
    }
}

export const fetchListTaskSuccess = (response) => {
    return {
        type: ACTION_TYPES.FETCH_LIST_TASK_SUCCESS,
        payloads: {
            response
        }
    }
}

export const fetchListTaskFail = (error) => {
    return {
        type: ACTION_TYPES.FETCH_LIST_TASK_FAIL,
        payloads: {
            error
        }
    }
}