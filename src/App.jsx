import { lazy } from 'react';
import {  } from 'react-router-dom';


// home
const Home = lazy(()=> import('./pages/Home'));


const App = () => {
  return (
    <>
      <Home />
    </>
  )
}

export default App;