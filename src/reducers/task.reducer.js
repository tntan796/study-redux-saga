import { ACTION_TYPES } from "../common/contants";
var intialState = {
    list: [],
    isShowForm: false,
    editTask: null
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
            const { data } = action.payload;
            return { ...state, list: data };

        case ACTION_TYPES.SEARCH_TASK_FAIL:
            return { ...state, list: [] };

        case ACTION_TYPES.ADD_TASK:
            return { ...state, editTask: null };

        case ACTION_TYPES.ADD_TASK_SUCCESS:
            const { task } = action.payload;
            state.list.push(task);
            return { ...state }

        case ACTION_TYPES.ADD_TASK_FAIL:
            return { ...state }

        case ACTION_TYPES.DELETE_TASK_SUCCESS:
            const { id } = action.payload;
            const list = [...state.list.filter(t => t.id != id)];
            return { ...state, list};

        case ACTION_TYPES.DELETE_TASK_FAIL:
            return { ...state }

        case ACTION_TYPES.SET_EDIT_TASK:
            return {...state, editTask: action.payload.task};

        default:
            return { ...state };
    }

}

export default taskReducer;