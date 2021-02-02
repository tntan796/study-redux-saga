import { ACTION_TYPES } from "../common/contants";

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case ACTION_TYPES.SHOW_LOADING:
            return true;
        case ACTION_TYPES.HIDE_LOADING:
            return false;
        default:
            return state;
    }
}

export default loadingReducer;