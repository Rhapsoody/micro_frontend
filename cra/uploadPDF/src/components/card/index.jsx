import React from 'react';
import styles from './styles.module.css';

const Card = props => {
  const { userName } = props;

  return (
    <div className={styles.card}>
      <span data-testid="welcome-message">Bienvenue {userName}</span>
    </div>
  );
}

export default Card;
