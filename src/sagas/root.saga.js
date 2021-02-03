import {call, fork, put, take} from 'redux-saga/effects';
import { showLoading, hideLoading } from '../actions/loading.action';
import { ACTION_TYPES, TOAST } from '../common/contants';
import * as taskApis from '../apis/task.api';
import { showToast } from '../actions/toast.action';
import * as taskActions from '../actions/task.action';
function * getTaskList() {
    while(true) {
        yield take(ACTION_TYPES.FETCH_LIST_TASK);
        try {
            yield put(showLoading());
            const tasks = yield call(taskApis.getList);
            yield put(taskActions.fetchListTaskSuccess(tasks.data));
            yield put(showToast(TOAST.SEVERITY.SUCCESS,
                'Thành công', 'Lấy dữ liệu thành công'));
        } catch (error) {
            yield put(showToast(TOAST.SEVERITY.ERROR,
                'Thất bại', 'Lấy dữ liệu thất bại'));
        }
        yield put(hideLoading());
    }
}

function* rootSaga() {
    yield fork(getTaskList);
}

export default rootSaga;