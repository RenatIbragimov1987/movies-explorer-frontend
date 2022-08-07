import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
		<div className='filter'>
			<form action="" className='filter__form'>
				<div className='filter__circle'></div>
        <input type='checkbox' class="filter__field" />
			  <p>Короткометражки</p>
    	</form>
		</div>
    
  );
};

export default FilterCheckbox;