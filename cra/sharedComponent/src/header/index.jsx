import React from 'react';
import styles from './styles.module.css';
const Header = (props) => {
    const {
        name
    } = props

  return (
  <header className={styles.header}>Pokemon API - {name}</header>
  );
};

export default Header;
