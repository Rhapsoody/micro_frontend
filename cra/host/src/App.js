import React from 'react';
import Header from '../../sharedComponent/src/header'

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
  </div>
  
  )
}
export default App;
