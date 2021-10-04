import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './footer.module.css';


const Footer = ({ setPlaylist }) => {
  const history = useHistory();
  const handleButtonClick = () => {
    setPlaylist([]);
    history.push('/');
  }

  return (
    <nav className={styles.footer}>
      <div className={styles.container}>
        <button
          className={styles.confirmButton}
          onClick={handleButtonClick}
        >
          CONFIRM
        </button>
      </div>
    </nav>
  )
}

export default Footer;
