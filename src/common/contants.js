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
    SEARCH_TASK_FAIL: 'search task fail'
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