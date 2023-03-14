import React from 'react';
import searchIcon from '../../images/guard.png';
import arrowBtn from '../../images/buttonSearch.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

const SearchForm = ({
  switchTumb,
  filterTumb,
  textSearch,
  searchValue,
  textNoMovies,
  searchButton,
  valuesErr,
  filterTumbSaved,
  textSearchSaved,
  searchValueSaved,
	valuesNotMovies,
	filteredMovies,
	searchButtonSaved,
	valuesErrSaved,
	valuesNotMoviesSaved,
}) => {

  return (
    <>
      <form className="search" >
        <div className="search__block">
          <div className="search__icon">
            <img src={searchIcon} alt="pic" className="search__icon-guard" />
          </div>
          {window.location.pathname === '/movies' ? (
            <input
              type="text"
              className="search__field"
              placeholder="Фильм"
							minLength={1}
              // required
              onChange={searchValue}
              value={textSearch}
            ></input>
          ) : (
            <input
              type="text"
							minLength={1}
              className="search__field"
              placeholder="Фильм"
              // required
              onChange={searchValueSaved}
              value={textSearchSaved}
            ></input>
          )}
          <span className="search__input-err">{valuesErr}</span>
					<span className="search__input-err">{valuesErrSaved}</span>
					
					{(window.location.pathname === '/movies') ? (<button onClick={searchButton} className="search__btn" >
            <img src={arrowBtn} alt="picBtn" className="search__arrow" />
          </button>)
					: 
					(<button className="search__btn" onClick={searchButtonSaved}>
            <img src={arrowBtn} alt="picBtn" className="search__arrow" />
          </button>)
					}
          
          
        </div>
        <FilterCheckbox
          filterTumb={filterTumb}
          filterTumbSaved={filterTumbSaved}
          switchTumb={switchTumb}
        />
      </form>
			<div className="search__border-bott"></div>
			{filteredMovies  > 0 ? '' : <span className="search__movies-err">{valuesNotMovies}</span> }
			<span className="search__movies-err">{valuesNotMoviesSaved}</span>
			
      
    </>
  );
};

export default SearchForm;
