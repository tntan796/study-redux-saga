import React, { useEffect, useRef } from 'react';
import TaskBoardContainer from '../task-board/task-board.container';
import { Toast } from 'primereact/toast';
import { useSelector } from 'react-redux';
function App(props) {
  let toastState = useSelector(state => state.toast);

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
    </>
  )
}

export default App;
