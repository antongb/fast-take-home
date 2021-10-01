import React from 'react';
import { fetchMovies } from '../api/MovieAPI'
import styles from './searchField.module.css';


const SearchField = ({
  searchInput,
  setSearchInput,
  setMovieList,
}) => {

  const onInputChange = e => {
    setSearchInput(e.target.value);
  }

  const onSearchSubmit = e => {
    e.preventDefault();
    // make api call here
    fetchMovies(searchInput, setMovieList);
    // setSearchInput(''); // if I decide to clear it
  }

  return (
    <div className={styles.container}>
      <form onSubmit={onSearchSubmit}>
        <input
          className={styles.searchInput}
          placeholder={'Search...'}
          onChange={onInputChange}
          value={searchInput}
        />
      </form>
    </div>
  )
}

export default SearchField;
