import { call, delay, fork, put, select, take, takeLatest } from 'redux-saga/effects';
import { showLoading, hideLoading } from '../actions/loading.action';
import { ACTION_TYPES, TOAST } from '../common/contants';
import * as taskApis from '../apis/task.api';
import { showToast } from '../actions/toast.action';
import * as taskActions from '../actions/task.action';
import * as modalActions from '../actions/modal.action';
import TaskFormComponent from '../components/task-form/task-form.component';
/**
 * Lấy dữ liệu từ server
 * Bước 1: Gọi api
 * Bước 2. 
 *  2.1. Hiển thị loading
 *  2.2. Nếu thành công => Dispatch action cập nhật lại task
 *  2.3. Ẩn loading
 * Bước 3.
 *  3.1. Nếu thất bại => Thông báo màn hình
 *  3.2. Tắt loading
 */
function* getTaskList() {
    while (true) {
        yield take(ACTION_TYPES.FETCH_LIST_TASK);
        try {
            yield put(showLoading());
            const tasks = yield call(taskApis.getList);
            yield put(taskActions.fetchListTaskSuccess(tasks.data));
        } catch (error) {
            yield put(showToast(TOAST.SEVERITY.ERROR,
                'Thất bại', 'Lấy dữ liệu thất bại'));
        }
        yield delay(500);
        yield put(hideLoading());
    }
}

function* filterTaskSaga({ payload }) {
    yield delay(500);
    const { search } = payload;
    const taskList = yield select(state => state.task.list);
    yield put(showLoading());
    const taskFilter = taskList.filter(task =>
        task.name
            .trim()
            .toLowerCase()
            .includes(search.trim().toLowerCase()));
    yield put(taskActions.searchTaskSuccess(taskFilter));
    yield put(hideLoading());
}

function* handleAddTask({payload}) {
    yield put(modalActions.showModal());
    yield put(modalActions.changeHeader('Add Task'));
    yield put(modalActions.changeComponent(<TaskFormComponent handleSave = {this.handleSave} closeModal={this.closeModal}></TaskFormComponent>));
}

function* rootSaga() {
    yield fork(getTaskList);
    yield takeLatest(ACTION_TYPES.SEARCH_TASK, filterTaskSaga);
    yield takeLatest(ACTION_TYPES.ADD_TASK, handleAddTask)
}

export default rootSaga;