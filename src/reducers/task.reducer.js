import { ACTION_TYPES } from "../common/contants";
var intialState = {
    list: []
};

const taskReducer = (state = intialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_LIST_TASK:
            return { ...state, list: [] };
        case ACTION_TYPES.FETCH_LIST_TASK_SUCCESS:
            return { ...state, list: action.payload.tasks };
        case ACTION_TYPES.FETCH_LIST_TASK_FAIL:
            return { ...state, list: [] };
        case ACTION_TYPES.SEARCH_TASK_SUCCESS:
            const {data} = action.payload;
            return { ...state, list: data};
        default:
            return { ...state };
    }

}

export default taskReducer;