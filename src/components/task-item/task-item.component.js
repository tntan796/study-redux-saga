import React, { Component } from 'react'
import './task-item.compnent.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import PropTypes from 'prop-types';
export default class TaskItemComponent extends Component {
    render() {
        const {task, handleDelete, handleEdit} = this.props;

        const footer = <span>
            <Button icon="pi pi-pencil" className="p-button-rounded p-mr-1" 
                onClick = {() => handleEdit()}
            />
            <Button icon="pi pi-trash" className="p-button-rounded p-button-danger"
                onClick = {() => handleDelete()}/>
        </span>;

        return (
            <Card title={task.name} subTitle="SubTitle" footer={footer} className="p-mt-2">
                {task.description}
            </Card>
        )
    }
}

TaskItemComponent.propTypes = {
    task: PropTypes.object,
    handleEdit: PropTypes.func,
    handleDelete: PropTypes.func
}