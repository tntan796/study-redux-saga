import {combineReducers} from 'redux';
import loadingReducer from './loading.reducer';
import taskReducer from './task.reducer';
import toastReducer from './toast.reducer';

const rootReducer = combineReducers({
    task: taskReducer,
    toast: toastReducer,
    isLoading: loadingReducer
})

export default rootReducer;

