import {  } from "../scss/WelcomeServices.scss";
import ServicesPNG from "../../../img/ServicesPNG.png";

function WelcomeServices() {
    return (
      <div className="Welcome-Services">
        <div className="Welcome-Container">
          <span>Услуги</span>
        <img src={ServicesPNG} alt="Services" />
      </div>
      </div>
    );
  }
  
  export default WelcomeServices;
  