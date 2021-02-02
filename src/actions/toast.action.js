import { ACTION_TYPES } from "../common/contants"

export const showToast = (severity = 'success',
                          summary = 'Tạo mới thành công',
                          detail = 'Message Content',
                          life = 3000) => {
    return {
        type: ACTION_TYPES.SHOW_TOAST_MESSAGE,
        payload: {
            toastMessage: {
                severity,
                summary,
                detail,
                life
            }
        }
    }
}



export const closeToast = () => {
    return {
        type: ACTION_TYPES.CLOSE_TOAST_MESSAGE
    }
}