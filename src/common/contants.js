export const ACTION_TYPES = {
    FETCH_LIST_TASK: 'fetch list task',
    FETCH_LIST_TASK_SUCCESS: 'fetch list task success',
    FETCH_LIST_TASK_FAIL: 'fetch list task fail',
    SHOW_TOAST_MESSAGE: 'show toast message',
    CLOSE_TOAST_MESSAGE: 'close toast message',
    SHOW_LOADING: 'show loading',
    HIDE_LOADING: 'hide loading',
    SEARCH_TASK: 'search task',
    SEARCH_TASK_SUCCESS: 'search task success',
    SEARCH_TASK_FAIL: 'search task fail',
    ADD_TASK: 'add task',
    ADD_TASK_SUCCESS: 'add task success',
    ADD_TASK_FAIL: 'add task fail',
    SHOW_MODAL: 'show modal',
    CLOSE_MODAL: 'close modal',
    CHANGE_HEADER: 'change header',
    CHANGE_COMPONENT: 'change component',
    DELETE_TASK: 'delete task',
    DELETE_TASK_SUCCESS: 'delete task success',
    DELETE_TASK_FAIL: 'delete task fail'
}

export const API_ENDPOINT = 'http://localhost:3210';

export const STATUS = [
    {
        value: 0,
        label: 'READY'
    },
    {
        value: 1,
        label: 'IN PROGRESS'
    },
    {
        value: 2,
        label: 'COMPLETE'
    }
]


export const TOAST = {
    SEVERITY: {
        SUCCESS: 'success',
        INFO: 'info',
        WARN: 'warn',
        ERROR: 'error'
    }
}