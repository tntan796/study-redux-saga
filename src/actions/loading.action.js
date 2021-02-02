import { ACTION_TYPES } from "../common/contants"

export const showLoading = () => {
    return {
        type: ACTION_TYPES.SHOW_LOADING
    }
}

export const hideLoading = () => {
    return {
        type: ACTION_TYPES.HIDE_LOADING
    }
}