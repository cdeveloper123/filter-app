import React from 'react';

const FilterCheckbox = ({ label, checked, onChange, count }) => (
  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      id={label}
      checked={checked}
      onChange={onChange}
    />
    <label className="form-check-label" htmlFor={label}>
      {label} ({count})
    </label>
  </div>
);

export default FilterCheckbox;
