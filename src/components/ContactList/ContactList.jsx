import React from 'react';

export const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    </div>
  );
};
