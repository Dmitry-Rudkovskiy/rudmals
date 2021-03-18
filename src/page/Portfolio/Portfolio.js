import "./scss/Portfolio.scss";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {Header, WelcomePortfolio, SectionPortfolio} from "../import";

function Portfolio() {

  AOS.init();

    return (
      <> 
      <div className="Portfolio" data-aos="zoom-in">
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
       </>
    );
  }
  
  export default Portfolio;
  