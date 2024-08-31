import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts, selectLoading, selectError } from '../../redux/contacts/slice';
import Contact from '../Contact/Contact';
import ConfirmationModal from '../ContactModal/ContactModal'; // Import the modal
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteClick = (contact) => {
    setContactToDelete(contact);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete.id));
    }
    setIsModalOpen(false);
    setContactToDelete(null);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
    setContactToDelete(null);
  };

  if (loading) {
    return <p className={css.loading}>Loading...</p>;
  }

  if (error) {
    return <p className={css.error}>Error: {error}</p>;
  }

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.listItem}>
            <span className={css.contactName}>{contact.name}</span>
            <span className={css.contactNumber}>{contact.number}</span>
            <button
              className={css.deleteButton}
              onClick={() => handleDeleteClick(contact)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ConfirmationModal
        isOpen={isModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};

export default ContactList;
