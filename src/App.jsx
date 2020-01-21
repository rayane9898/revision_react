import React, {Fragment} from 'react';
import Header from "./compenents/Header";
import Naviguation from "./compenents/Naviguation";
import Exercice1 from './compenents/Exercice1';
import Exercice3 from './compenents/Exercice3';
import Exercice4 from './compenents/Exercice4'




const App = () => {
  return (
        <Fragment>
          <Header/>
          <Naviguation/>  
          <Exercice1/>
          <Exercice3/>
          <Exercice4/>
        </Fragment> 
  )
}

export default App;
