import { ACTION_TYPES } from "../common/contants";

var intialState = {};

const taskReducer = (state = intialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_LIST_TASK:
            return { ...state };
        default:
            return { ...state };
    }

}

export default taskReducer;