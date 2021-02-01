import React, { Component } from 'react'
import './task-board.container.css';
import { Button } from 'primereact/button';
import TaskListComponent from '../../components/task-list/task-list.component';
export default class TaskBoardContainer extends Component {

    render() {
      
        return (
            <div className="p-p-2">
                <div className="p-grid">
                    <div className="p-col p-text-right">
                        <Button label="Add" icon="pi pi-plus" />
                    </div>
                </div>
                <div className="p-grid">
                    <TaskListComponent></TaskListComponent>
                    <TaskListComponent></TaskListComponent>
                    <TaskListComponent></TaskListComponent>
                </div>
            </div>
        )
    }
}
