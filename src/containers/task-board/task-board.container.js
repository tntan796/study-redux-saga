import React, { Component } from 'react'
import './task-board.container.css';
import { Button } from 'primereact/button';
import TaskListComponent from '../../components/task-list/task-list.component';
import { connect } from 'react-redux';
import { STATUS } from '../../common/contants';
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/task.action';
import SearchBoxComponent from '../../components/search-box/search-box.component';
import ModalComponent from '../../components/modal/modal.component';
import * as modalActions from '../../actions/modal.action';

class TaskBoardContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {taskActions} = this.props;
        const {fetchListTask} = taskActions;
        fetchListTask();
    }

    renderTaskBoard() {
        let taskBoadElm = null;
        const {task} = this.props;
        const {list} = task;
        if (list) {
            taskBoadElm = STATUS.map((stt, index) => {
                const tasksFilter = list.filter(t => t.status === stt.value);
                return (
                    <TaskListComponent status = {stt.label} key = {index} tasks = {tasksFilter}></TaskListComponent>
                );
            });
        }
        return taskBoadElm;
    }

    handleSearch = (e) => {
        const target = e.target;
        const value = target.value;
        const {taskActions} = this.props;
        const {searchTask} = taskActions;
        searchTask(value);
    }
    
    handleSave = (data) => {
        const {taskActions} = this.props;
        const {addTask} = taskActions;
        addTask(data);
    }

    handleAdd = () => {
        const {modalActions} = this.props;
        const {showModal} = modalActions;
        showModal();
    }

    render() {
        return (
            <div className="p-p-2">
                <div className="p-grid">
                    <div className="p-col-3">
                        <SearchBoxComponent handleSearch = {this.handleSearch}/>
                    </div>
                    <div className="p-col p-text-right">
                        <Button label="Add" icon="pi pi-plus" onClick={() => this.handleAdd()} />
                    </div>
                </div>
                <div className="p-grid">
                {
                    this.renderTaskBoard()
                }
                </div>
                <ModalComponent/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        task: state.task
    }
}

const mapDispatchToProps = dispatch => {
    return {
        taskActions: bindActionCreators(taskActions, dispatch),
        modalActions: bindActionCreators(modalActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskBoardContainer);