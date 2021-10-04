import React from 'react';
import styles from './playlist.module.css';
import Footer from './Footer';


const Playlist = ({ playlist, setPlaylist }) => {

  const handleRemoveClick = v => {
    setPlaylist(
      playlist.filter(mov => v.imdbID !== mov.imdbID)
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.playlist}>
        {playlist.map((v, idx) =>
          <div className={styles.movie} key={idx}>
            <div className={styles.title}>
              {v.Title}
            </div>
            <div className={styles.divider} />
            <button className={styles.removeButton} onClick={() => handleRemoveClick(v)}>
              Remove
            </button>
          </div>
        )}
      </div>
      <div className={styles.footer}>
        <div className={styles.footerText}>MY FAVORITE COLOR IS ORANGE</div>
        <Footer
          setPlaylist={setPlaylist}
        />
      </div>
    </div>
  )
}
;
export default Playlist;
