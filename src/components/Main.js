import React from 'react';
import styles from './main.module.css';


const Main = ({ movieList, playlist, setPlaylist }) => {

  const handleAddClick = v => {
    setPlaylist([
      ...playlist,
      v
    ])
  }

  return (
    <div className={styles.container}>
      <div className={styles.movieList}>
        {movieList.map((v, idx) =>
          <div className={styles.movie} key={idx}>
            <div className={styles.title}>
              {v.Title}
            </div>
            <div className={styles.divider} />
            <button className={styles.addButton} onClick={() => handleAddClick(v)}>
              Add to Playlist
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Main;
