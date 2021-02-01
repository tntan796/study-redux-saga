export const ACTION_TYPES = {
    FETCH_LIST_TASK: 'fetch list task',
    FETCH_LIST_TASK_SUCCESS: 'fetch list task success',
    FETCH_LIST_TASK_FAIL: 'fetch list task fail'
}

export const API_ENDPOINT = 'http://localhost:3000';

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