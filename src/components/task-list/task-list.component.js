import React, { Component } from 'react'
import TaskItemComponent from '../task-item/task-item.component';
import './task-list.component.css';
import PropTypes from 'prop-types';

export default class TaskListComponent extends Component {

    renderTaskItem() {
        const {tasks, handleDelete, handleEdit} = this.props;
        let taskItemElm = null;
        taskItemElm = tasks.map((task, index) => {
            return(
                <TaskItemComponent
                    key = {index}
                    task = {task}
                    handleDelete = {() => handleDelete(task.id)}
                    handleEdit = {() => handleEdit(task)}
                ></TaskItemComponent>
            );
        });
        return taskItemElm;
    }

    render() {
        const {status} = this.props;
        return (
            <div className="p-col">
                <h4>{status}</h4>
                {this.renderTaskItem()}
            </div>
        )
    }
}

TaskListComponent.props = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    handleDelete: PropTypes.func,
    handleEdit: PropTypes.func
}