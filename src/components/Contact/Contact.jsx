import React from 'react';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li>
      {contact.name}: {contact.number}
      <button onClick={onDeleteContact}>Delete</button>
    </li>
  );
};

export default Contact;
