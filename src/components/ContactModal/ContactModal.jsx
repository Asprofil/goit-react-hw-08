import React from 'react';
import css from './ContactModal.module.css';

const ContactModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <h2>Are you sure?</h2>
        <p>Do you really want to delete this contact?</p>
        <div className={css.buttons}>
          <button onClick={onConfirm} className={css.confirmButton}>Yes</button>
          <button onClick={onCancel} className={css.cancelButton}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
