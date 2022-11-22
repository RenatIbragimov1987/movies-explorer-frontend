import React from 'react';
import searchIcon from '../../images/guard.png';
import arrowBtn from '../../images/buttonSearch.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
const SearchForm = ({switchTumb, filterTumb, isLoggedIn, textSearch, searchValue, textNoMovies, searchButton, valuesErr}) => {
  return (
    <>
      <form className="search" onSubmit={searchButton} >
        <div className="search__block">
          <div className="search__icon">
            <img src={searchIcon} alt="pic" className="search__icon-guard" />
          </div>
          <input type="text" className="search__field"  placeholder="Фильм" required onChange={searchValue} value={textSearch}></input>
					<span className="search__input-err">{valuesErr}</span>
          <button className="search__btn" type="submit">
            <img src={arrowBtn} alt="picBtn" className="search__arrow" />
          </button>
					<span className="search__input-err">{textNoMovies}</span>
        </div>
        <FilterCheckbox filterTumb={filterTumb} isLoggedIn={isLoggedIn}  switchTumb={switchTumb}/>
      </form>
			
      <div className="search__border-bott"></div>
    </>
  );
};

export default SearchForm;
