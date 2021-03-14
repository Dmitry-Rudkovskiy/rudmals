import "./scss/Services.scss";
import {Header, WelcomeServices, NavigationServices1, NavigationServices2, SectionServices} from "../import";

function Services() {
    return (
      <div className="Services">
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
    );
  }
  
  export default Services;
  