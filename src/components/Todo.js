import { useState } from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'
function Todo({title}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true)
  }

  function closeModalOnCLick() {
      setModalIsOpen(false)
  }
  
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalOnCLick} onConfirm={closeModalOnCLick} /> }
      {modalIsOpen && <Backdrop onCancel={closeModalOnCLick}/> }

    </div>
  );
}

export default Todo;
