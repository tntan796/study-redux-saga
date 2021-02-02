import React, { Component } from 'react'
import './task-board.container.css';
import { Button } from 'primereact/button';
import TaskListComponent from '../../components/task-list/task-list.component';
import { connect } from 'react-redux';
import { STATUS } from '../../common/contants';
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/task.action';
class TaskBoardContainer extends Component {

    componentDidMount() {
        const {taskActions} = this.props;
        const {fetchListTaskRequest} = taskActions;
        fetchListTaskRequest();
    }

    renderTaskBoard() {
        let taskBoadElm = null;
        const {task} = this.props;
        const {list} = task;
        if (list) {
            taskBoadElm = STATUS.map((stt, index) => {
                const tasksFilter = list.filter(t => t.status == stt.value);
                return (
                    <TaskListComponent status = {stt.label} key = {index} tasks = {tasksFilter}></TaskListComponent>
                );
            });
        }
        return taskBoadElm;
    }

    render() {
        return (
            <div className="p-p-2">
                <div className="p-grid">
                    <div className="p-col p-text-right">
                        <Button label="Add" icon="pi pi-plus" />
                    </div>
                </div>
                <div className="p-grid">
                {
                    this.renderTaskBoard()
                }
                </div>
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
        taskActions: bindActionCreators(taskActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskBoardContainer);