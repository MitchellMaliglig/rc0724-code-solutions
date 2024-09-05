import { useState } from 'react';
import './App.css';
import { Modal } from './Modal';

function App() {
  const [isOpen, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleCancel() {
    setOpen(false);
  }

  function handleDelete() {
    alert('Deleted');
    setOpen(false);
  }

  return (
    <>
      <button onClick={handleOpen}>Delete Me!</button>
      <Modal isOpen={isOpen} onClose={handleCancel}>
        <p>Do you really want to delete?</p>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </Modal>
    </>
  );
}

export default App;
