// FormElements.tsx

import React from 'react';
import { InputProps, SelectProps } from '../../types';
import '../../styles/solar.css'; // Import CSS for styling

// --- TextInput Component ---
export const TextInput: React.FC<InputProps> = ({ name, placeholder, value, handleChange }) => {
  const type = name === 'email' ? 'email' : name === 'phone' || name === 'zipCode' ? 'tel' : 'text';

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      className="form-input"
    />
  );
};

// --- SelectInput Component (Dropdown) ---
export const SelectInput: React.FC<SelectProps> = ({ name, placeholder, value, handleChange, options }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={handleChange}
      required
      className="form-select"
    >
      {/* The first option is the placeholder */}
      <option value="" disabled>
        {placeholder}
      </option>
      {/* Map the array of options */}
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};