import React from 'react';
import { useEffect } from 'react';
import './FilterCheckbox.css';


const FilterCheckbox = ({isLoggedIn}) => {

	const found = localStorage.getItem('switchTumb');
	const foundMovies = JSON.parse(found);
	

	const [switchTumb, setSwitchTumb] = React.useState(foundMovies);
	// const [switchTumb2, setSwitchTumb2] = React.useState(true);

	const filterTumb = () => {
		setSwitchTumb(!switchTumb)
	}
	
	useEffect(() => {
		if(isLoggedIn) {
			localStorage.setItem('switchTumb', JSON.stringify(switchTumb));
		}
  }, [isLoggedIn, switchTumb]);
	


  return (
    <div className="filter" >
      <label className="filter__checkbox">
        <input type="checkbox" className="filter__input" checked={switchTumb} onChange={filterTumb}/>
        <span className="filter__switch"></span>
      </label>
      <p className="filter__title">Короткометражки</p>
    </div>

  );

};

export default FilterCheckbox;
