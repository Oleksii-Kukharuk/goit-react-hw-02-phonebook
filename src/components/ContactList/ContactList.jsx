import React from 'react';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button onClick={() => onDelete(id)} type="button">
              {' '}
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
