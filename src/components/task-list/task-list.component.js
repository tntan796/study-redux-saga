import React, { Component } from 'react'
import TaskItemComponent from '../task-item/task-item.component';
import './task-list.component.css';

export default class TaskListComponent extends Component {

    renderTaskItem() {
        const {tasks, handleDelete} = this.props;
        let taskItemElm = null;
        taskItemElm = tasks.map((task, index) => {
            return(
                <TaskItemComponent
                    key = {index}
                    task = {task}
                    handleDelete = {() => handleDelete(task.id)}
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
