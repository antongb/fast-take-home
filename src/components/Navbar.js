import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import SearchField from './SearchField.js';


const Navbar = ({ searchInput, setSearchInput }) => {


  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to='/' className={styles.homeButton}>Home</Link>
        <SearchField
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <Link to='/playlist' className={styles.playList}>Playlist</Link>
      </div>
    </nav>
  )
}

export default Navbar;
