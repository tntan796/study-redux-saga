import React, { Component } from 'react'
import loadingIcon from '../../assets/images/gif/loading2.gif';
import './loading.component.css';
export default class LoadingComponent extends Component {

    render() {
        return (
            <div className="loading">
                <img src={loadingIcon} alt="loading" className="icon"/>
            </div>
        )
    }
}
