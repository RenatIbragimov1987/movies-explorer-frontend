import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonYet from '../ButtonYet/ButtonYet';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';


const Movies = ({
	adress,
  isLoggedIn,
	textSearch,
  valuesErr,
	searchValue,
	searchButton,
	filterTumb,
	switchTumb,
  buttonMoreHandle,
  resMovies,
  AddToFavorites,
  buttonShowMore,
  displayCard,
  savedMovies,
	likeButtonHandler,
	textSearchSaved,
	valuesNotMovies,
	filteredMovies,
	switchSavedIcon,
}) => {

  return (
    <>
      <Header modifierMovi="header__nav_none" isLoggedIn={isLoggedIn} />
      <Navigation />
      <SearchForm
        isLoggedIn={isLoggedIn}
        textSearch={textSearch}
        valuesErr={valuesErr}
        searchValue={searchValue}
        searchButton={searchButton}
        filterTumb={filterTumb}
        switchTumb={switchTumb}
				valuesNotMovies={valuesNotMovies}
				filteredMovies={filteredMovies}
      />

      {displayCard === true ? (
        <MoviesCardList
				adress={adress}
          savedMovies={savedMovies}
          resMovies={resMovies}
          AddToFavorites={AddToFavorites}
					switchSavedIcon={switchSavedIcon}
        />
      ) : (
        ''
      )}
      {(filteredMovies.length !== resMovies.length) ?  <ButtonYet buttonMoreHandle={buttonMoreHandle}/> : '' }

      <Footer />
    </>
  );
};

export default Movies;
