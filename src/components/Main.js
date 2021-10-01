import React from 'react';
import styles from './main.module.css';


const Main = ({ movieList }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.movieList}>
        {movieList.map((v, idx) =>
          <li key={idx}>
            {v.Title}
          </li>
        )}
      </ul>
    </div>
  )
}

export default Main;
