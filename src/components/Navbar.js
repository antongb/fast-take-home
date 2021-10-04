import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './navbar.module.css';
import SearchField from './SearchField.js';


const Navbar = ({
  searchInput,
  setSearchInput,
  setMovieList,
}) => {
  const location = useLocation();
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.search}>
          <SearchField
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setMovieList={setMovieList}
          />
        </div>
        {location.pathname === '/'
          ? <Link to='/playlist' className={styles.playList}>Playlist</Link>
          : <Link to='/' className={styles.playList}>Home</Link>
        }
      </div>
    </nav>
  )
}

export default Navbar;
