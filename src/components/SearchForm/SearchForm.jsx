import React from 'react';
import searchIcon from '../../images/guard.png';
import arrowBtn from '../../images/buttonSearch.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <>
      <div className="search">
        <div className="search__block">
          <div className="search__icon">
            <img src={searchIcon} alt="pic" className="search__icon-guard" />
          </div>
          <input type="text" className="search__field" placeholder="Фильм" />
          <button type="submit" className="search__btn">
            <img src={arrowBtn} alt="pic" className="search__arrow" />
          </button>
        </div>
        <FilterCheckbox />
      </div>
      <div className="search__border-bott"></div>
    </>
  );
};

export default SearchForm;
