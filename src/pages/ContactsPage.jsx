import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import ContactList from '../components/ContactList/ContactlList';
import SearchBar from '../components/SearchBar/SearchBar';
import ContactForm from '../components/ContactForm/ContactForm';
function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <h1>Phonebook</h1>
      <SearchBar />
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
}

export default ContactsPage;
