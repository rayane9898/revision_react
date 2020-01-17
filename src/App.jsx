import React, {Fragment} from 'react';
import Header from "./compenents/Header";
import Naviguation from "./compenents/Naviguation";
import Exercice1 from './compenents/Exercice1';




const App = () => {
  return (
        <Fragment>
          <Header/>
          <Naviguation/>  
          <Exercice1/>
        </Fragment> 
  )
}

export default App;
