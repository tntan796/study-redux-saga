import React, { Component } from 'react'
import './task-board.container.css';
import { Button } from 'primereact/button';
import TaskListComponent from '../../components/task-list/task-list.component';
import { connect } from 'react-redux';
import { STATUS } from '../../common/contants';
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/task.action';
import { Dialog } from 'primereact/dialog';
import TaskFormComponent from '../../components/task-form/task-form.component';
class TaskBoardContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

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

    handleShowTaskForm() {
        this.setState({
            visible: true
        })
    }

    onHide = () => {
        this.setState({
            visible: false
        })
    }
    
    render() {
        return (
            <div className="p-p-2">
                <div className="p-grid">
                    <div className="p-col p-text-right">
                        <Button label="Add" icon="pi pi-plus" onClick={() => this.handleShowTaskForm()} />
                    </div>
                </div>
                <div className="p-grid">
                {
                    this.renderTaskBoard()
                }
                </div>
                
            <Dialog header="Task form" visible={this.state.visible}
                    style={{width: '50vw'}} modal onHide={() => this.onHide()}>
                <TaskFormComponent></TaskFormComponent>
            </Dialog>
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