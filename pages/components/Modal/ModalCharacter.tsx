import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { FormCharacter } from './FormCharacter';

export const ModalCharacter = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Nuevo personaje
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agrega un nuevo personaje</Modal.Title>
        </Modal.Header>
        <Modal.Body><FormCharacter /></Modal.Body>
      </Modal>
    </>
  )
}