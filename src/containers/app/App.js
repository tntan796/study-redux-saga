import React, { useEffect, useRef } from 'react';
import TaskBoardContainer from '../task-board/task-board.container';
import { Toast } from 'primereact/toast';
import { useSelector } from 'react-redux';
import LoadingComponent from '../../components/loading/loading.component';
function App(props) {
  let toastState = useSelector(state => state.toast);
  let isLoading = useSelector(state => state.isLoading);
  useEffect(() => {
    if (toastState && toastState.showToast) {
      toast.current.show(toastState.toastMessage);
    }
  }, [toastState])

  const toast = useRef(null);
  return (
    <>
      <TaskBoardContainer></TaskBoardContainer>
      <Toast ref={toast} />
      {isLoading ? <LoadingComponent/> : null}
    </>
  )
}

export default App;
