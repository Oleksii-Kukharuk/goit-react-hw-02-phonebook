import { nanoid } from 'nanoid';
import React from 'react';

const filterId = nanoid();
export const Filter = ({ value, onChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <label htmlFor={filterId}></label>
      <input
        id={filterId}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
      ;
    </>
  );
};
