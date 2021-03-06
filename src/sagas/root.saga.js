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
    yield put(showLoading());
    const { search } = payload;
    try {
        const result = (yield call(taskApis.filterTask, search)).data;
        yield put(taskActions.searchTaskSuccess(result));
    } catch (error) {
        yield put(taskActions.searchTaskFail(error));
    }
    yield put(hideLoading());
}

function* handleAddTask({payload}) {
    const {task} = payload;
    yield put(showLoading());
    try {
        const result = yield call(taskApis.addTask, {task});
        yield put(taskActions.addTaskSuccess(result.data));
        yield put(showToast(TOAST.SEVERITY.SUCCESS,
            'Thành công', 'Thêm công việc thành công'));
        yield put(modalActions.closeModal());
    } catch (error) {
        yield put(taskActions.addTaskFail(error));
        yield put(showToast(TOAST.SEVERITY.ERROR,
            'Thất bại', 'Thêm công việc thất bại'));
    }
    yield delay(500);
    yield put(hideLoading());
}

function* handleDeleteTask({payload}) {
    const {id} = payload;
    yield put(showLoading());
    try {
        yield call(taskApis.deleteTask, id);
        yield put(taskActions.deleteTaskSuccess(id));
        yield put(showToast(TOAST.SEVERITY.SUCCESS,
            'Thành công', 'Xóa công việc thành công'));
    } catch (error) {
        console.log(error)
        yield put(taskActions.deleteTaskFail(error));
    }
    yield put(hideLoading());
}

function* handleEditTask({payload}) {
    const {task} = payload;
    yield put(showLoading());
    try {
        yield call(taskApis.updateTask, {task});
        yield put(taskActions.editTaskSuccess(task));
        yield put(showToast(TOAST.SEVERITY.SUCCESS,
            'Thành công', 'Cập nhật công việc thành công'));
    } catch (error) {
        yield put(showToast(TOAST.SEVERITY.ERROR,
            'Thất bại', 'Cập nhật công việc thất bại'));
            console.log('Update fail:', error);
    }
    yield put(hideLoading());
}

function* rootSaga() {
    yield fork(getTaskList);
    yield takeLatest(ACTION_TYPES.SEARCH_TASK, filterTaskSaga);
    yield takeLatest(ACTION_TYPES.ADD_TASK, handleAddTask)
    yield takeLatest(ACTION_TYPES.DELETE_TASK, handleDeleteTask);
    yield takeLatest(ACTION_TYPES.EDIT_TASK, handleEditTask);
    
}

export default rootSaga;