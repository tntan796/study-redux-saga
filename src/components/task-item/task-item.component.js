import React, { Component } from 'react'
import './task-item.compnent.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default class TaskItemComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const footer = <span>
            <Button icon="pi pi-pencil" className="p-button-rounded p-mr-1" />
            <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" />
        </span>;

        return (
            <Card title="Title" subTitle="SubTitle" footer={footer} className="p-mt-2">
                Content
            </Card>
        )
    }
}
