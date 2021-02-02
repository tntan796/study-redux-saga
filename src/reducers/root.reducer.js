import {combineReducers} from 'redux';
import taskReducer from './task.reducer';
import toastReducer from './toast-reducer';

const rootReducer = combineReducers({
    task: taskReducer,
    toast: toastReducer
})

export default rootReducer;

