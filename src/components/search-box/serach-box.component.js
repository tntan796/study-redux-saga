import React, { Component } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default class SearchBoxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    handleSearch = () => {
        this.props.handleSearch(this.state.search);
    }

    render() {
        return (
            <div className="p-inputgroup">
                <InputText name='search' onChange={this.handleChange} placeholder="Keyword" />
                <Button icon="pi pi-search" className="p-button-primary" type="button" onClick={this.handleSearch}/>
            </div>
        )
    }
}
