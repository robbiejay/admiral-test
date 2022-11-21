import React from 'react';
import './Modal.css';
import modalContext from "../../context/ModalContext";

export const Modal = ({component, open, onClose}) => {

  return (
    <div className={`modal-container ${open ? 'modal-open' : 'modal-closed'}`}>
      <div className={'modal-inner-container'}>
        <svg onClick={() => onClose()} className={'modal-close-button'} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg>
        {component}
      </div>
    </div>
  )
}

export default Modal;
