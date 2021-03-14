import { useEffect, useState } from "react";
import "./scss/Portfolio.scss";
import {Header, WelcomePortfolio, SectionPortfolio} from "../import";

function Portfolio() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    setShowLoader(false)
  }, [])
    return (
      <>
      {showLoader ? <div className="Loader">
      </div> : 
      <div className="Portfolio">
        <div className="Portfolio-Container">
        <div className="Portfolio-Welcome">
        <Header />
        <div className="Welcome">
          <WelcomePortfolio />
          </div> 
          </div> 
         <SectionPortfolio />
      </div>
      </div>
    }
       </>
    );
  }
  
  export default Portfolio;
  