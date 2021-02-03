import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as modalActions from '../../actions/modal.action';
import { Dialog } from 'primereact/dialog';
import TaskFormComponent from '../../components/task-form/task-form.component';
import { bindActionCreators } from 'redux';

class ModalComponent extends Component {

    closeModal = () => {
        modalActions.closeModal();
    }

    render() {
        return (
            <Dialog header={this.props.modal.header} visible={this.props.modal.isShowModal}
                    style={{width: '50vw'}} modal onHide={() => this.closeModal()}>
                    {this.props.modal.component}
            </Dialog>
        )
    }
}

const mapStateToProps = state => {
    return {
       modal: state.modal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        modalActions: bindActionCreators(modalActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);