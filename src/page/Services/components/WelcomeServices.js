import {  } from "../scss/WelcomeServices.scss";
import ServicesPNG from "../../../img/ServicesPNG.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function WelcomeServices() {

AOS.init()

    return (
      <div className="Welcome-Services">
        <div className="Welcome-Container">
          <span>Услуги</span>
        <img src={ServicesPNG} alt="Services" data-aos="fade-up"/>
      </div>
      </div>
    );
  }
  
  export default WelcomeServices;
  