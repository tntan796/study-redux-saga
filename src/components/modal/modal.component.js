import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as modalActions from '../../actions/modal.action';
import { Dialog } from 'primereact/dialog';
import TaskFormComponent from '../../components/task-form/task-form.component';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
class ModalComponent extends Component {
    render() {
        const {component, isShowModal, header, modalActions} = this.props;
        const {closeModal} = modalActions;
        return (
            <Dialog header={header} visible={isShowModal}
                    style={{width: '50vw'}} onHide={() => closeModal()}>
                    {component}
            </Dialog>
        )
    }
}

ModalComponent.propTypes = {
    isShowModal: PropTypes.bool,
    header: PropTypes.string,
    component: PropTypes.object,
    modalActions: PropTypes.shape({
        closeModal: PropTypes.func
    })
}

const mapStateToProps = state => {
    return {
        isShowModal: state.modal.isShowModal,
        header: state.modal.header,
        component: state.modal.component
    }
}

const mapDispatchToProps = dispatch => {
    return {
        modalActions: bindActionCreators(modalActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);