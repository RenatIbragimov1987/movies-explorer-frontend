import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <div className="filter">
      <label className="filter__checkbox">
        <input type="checkbox" className="filter__input" />
        <span className="filter__switch"></span>
      </label>
      <p className="filter__title">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
