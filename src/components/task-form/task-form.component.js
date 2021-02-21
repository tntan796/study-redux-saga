import React, { Component } from 'react'
import './task-form.compnent.css';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
export default class TaskFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            status: 0
        }
    }

    // static getDerivedStateFromProps (nextProps, prevState) {
    //     if (nextProps.)
    // }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    handleSave() {
        const dataSave = {...this.state};
        dataSave.status = dataSave.status ? dataSave.status.code : 0;
        this.props.handleSave(dataSave);
    }

    render() {
        const statusData = [
            { name: 'Ready', code: 0 },
            { name: 'Inprogress', code: 1 },
            { name: 'Complete', code: 2 }
        ];

        const {name, description, status} = this.state;

        return (
            <div className="card">
                <div className="p-fluid p-grid">
                    <div className="p-field p-col-12 p-md-12 p-mt-4">
                        <span className="p-float-label">
                            <InputText id="lefticon" name = "name" value={name} onChange= {this.handleChange}/>
                            <label htmlFor="lefticon">Name</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-12">
                        <span className="p-float-label">
                            <Dropdown id="dropdown" options={statusData} optionLabel="name" name="status" value={status} onChange={this.handleChange} />
                            <label htmlFor="dropdown">Status</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-12">
                        <span className="p-float-label">
                            <InputTextarea id="textarea" name="description" value={description} rows={3} onChange= {this.handleChange}/>
                            <label htmlFor="textarea">Description</label>
                        </span>
                    </div>
                    <div className="p-formgroup-inline p-col-12">
                        <div className="p-field">
                            <Button label="Save" onClick={() => this.handleSave()} icon="pi pi-check" />
                        </div>
                        <div className="p-field">
                            <Button label="Close" icon="pi pi-check" className="p-button-danger" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
