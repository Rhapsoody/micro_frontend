import React from 'react';
import Header from '../../sharedComponent/src/header'
import FetchData from './components/pokemonData';

 
const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => {

  

  return(
    <div>
    <Header name="Host"/>
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>

    <h2>Pokemon Data on landing Page</h2>
    <FetchData />
  </div>
  
  )
}
export default App;
