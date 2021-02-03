import React, { Component } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default class SearchBoxComponent extends Component {
    render() {
        return (
            <div className="p-inputgroup">
                <InputText name='search' onChange={this.props.handleSearch} placeholder="Keyword" />
                <Button icon="pi pi-search" className="p-button-primary" type="button" onClick={this.handleSearch}/>
            </div>
        )
    }
}
