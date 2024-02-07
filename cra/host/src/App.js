import React from 'react';
import Header from '../../sharedComponent/src/header';
import Footer from '../../sharedComponent/src/footer';
import FetchData from './components/pokemonData';
import styles from './styles.module.css';

const App = () => {
  return (
    <div className={styles.root}>
      <Header name="Host" />
      <div className={styles.landingContainer}>
        <div className={styles.landingContent}>
          <h2 className={styles.title}>Pokemon Data on landing Page</h2>
          <div>
            <p className={styles.description}>Retrouvez votre pokédex miniature préféré !</p>
          </div>
        </div>
      <FetchData />
      </div>
      <Footer />
    </div>
  );
};
export default App;
