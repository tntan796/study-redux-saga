import {ACTION_TYPES} from '../common/contants';

export const showModal = () => {
    return {
        type: ACTION_TYPES.SHOW_MODAL
    }
}

export const closeModal = () => {
    return {
        type: ACTION_TYPES.CLOSE_MODAL
    }
}

export const changeHeader = (header) => {
    return {
        type: ACTION_TYPES.CHANGE_HEADER,
        payload: {
            header
        }
    }
}

export const changeComponent = (component) => {
    return {
        type: ACTION_TYPES.CHANGE_COMPONENT,
        payload: {
            component
        }
    }
}