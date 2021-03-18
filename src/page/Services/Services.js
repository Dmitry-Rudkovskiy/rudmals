import "./scss/Services.scss";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {
  Header, 
  WelcomeServices,
  NavigationServices1,
  NavigationServices2,
  SectionServices
    } from "../import";

function Services() {

  AOS.init();

    return (
   <>
      <div className="Services" data-aos="zoom-in">
        <div className="Services-Container">
        <div className="Services-Welcome">
        <Header />
        <div className="Welcome">
          <NavigationServices1 />
          <WelcomeServices />
          <NavigationServices2 />
          </div> 
          </div> 
         <SectionServices />
      </div>
      </div>

      </>

    );
  }
  
  export default Services;
  