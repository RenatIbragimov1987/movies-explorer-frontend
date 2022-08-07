import React from 'react';
// import searchIcon from '../../images/searchIcon.svg';
import searchIcon from '../../images/guard.png'
import arrowBtn from '../../images/arrowBtn.svg';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
      <form action="" className="search">
        <div className="search__block">
					<div  className="search__icon">
						<img src={searchIcon} alt="pic" className="search__icon-guard" />
					</div>
          <input type="text" class="search__field" placeholder="Фильм" />
					<button type='submit' className="search__btn">
						<img src={arrowBtn} alt="" className="search__arrow" />
					</button>
					<FilterCheckbox />
        </div>
      </form>
  );
};

export default SearchForm;
