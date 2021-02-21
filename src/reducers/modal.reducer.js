import { ACTION_TYPES } from "../common/contants";

var initialState = {
    isShowModal: false,
    header: '',
    component: null
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_HEADER:
            return { ...state, header: action.payload.header};
        case ACTION_TYPES.CHANGE_COMPONENT:
            return { ...state, component: action.payload.component};
        case ACTION_TYPES.SHOW_MODAL:
            return { ...state, isShowModal: true};
        case ACTION_TYPES.CLOSE_MODAL:
            return { ...state, isShowModal: false, header: '', component: null};
        default:
            return { ...state };
    }
}

export default modalReducer;