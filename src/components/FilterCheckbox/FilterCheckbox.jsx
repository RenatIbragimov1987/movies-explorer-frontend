import React from 'react';
import { useEffect } from 'react';
import './FilterCheckbox.css';


const FilterCheckbox = ({switchTumb, filterTumb, searchButton}) => {

  return (
    <div className="filter">
      <label className="filter__checkbox">
        <input type="checkbox" className="filter__input" checked={switchTumb} onChange={filterTumb}/>
        <span className="filter__switch"></span>
      </label>
      <p className="filter__title">Короткометражки</p>
    </div>
  );

};

export default FilterCheckbox;
