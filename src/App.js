import React, { useState } from 'react';
import Rudmals from "./img/Rudmals.png";
import {Home, Services, Portfolio} from "./page/import";
import "./page/index.scss";
import {Switch, Route} from 'react-router-dom'



function App() {
  const [showLoader, setShowLoader] = useState(true)

    setTimeout(() => {
       setShowLoader(false)
    }, 3000);

  return (
    <>
  


    {showLoader ? 
    <div className="Loader">
    <div className="LoaderRudmals">
      <img src={Rudmals} />
    </div>
    </div> : <Switch>
    <div className="App">
    <Route exact path="/" component={Home} />
    <Route exact path="/services" component={Services} />
    <Route exact path="/portfolio" component={Portfolio} />
    </div>
    </Switch>}
    
    </>
  );
}

export default App;
