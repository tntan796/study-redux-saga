import React, { Component } from 'react'
import TaskItemComponent from '../task-item/task-item.component';
import './task-list.component.css';

export default class TaskListComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="p-col">
                <h4>Ready</h4>
                <TaskItemComponent></TaskItemComponent>
                <TaskItemComponent></TaskItemComponent>
            </div>
        )
    }
}
