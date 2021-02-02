import { ACTION_TYPES } from "../common/contants";

var intialState = {
    showToast: false,
    toastMessage: {
        severity: 'success',
        summary: 'Success message',
        detail: 'Message Content',
        life: 3000
    }
};

const toastReducer = (state = intialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SHOW_TOAST_MESSAGE:
            return {
                showToast: true,
                toastMessage: action.payload.toastMessage
            };
        case ACTION_TYPES.CLOSE_TOAST_MESSAGE:
            return {
                ...state,
                showToast: false
            }
        default:
            return {...state};
    }
}

export default toastReducer;