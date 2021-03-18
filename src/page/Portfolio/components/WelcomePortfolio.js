import "../scss/WelcomePortfolio.scss";
import PortfolioPNG from "../../../img/PortfolioPNG.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function WelcomePortfolio() {

  AOS.init()

    return (
      <div className="Welcome-Portfolio">
        <div className="Welcome-Container">
          <span>Портфолио</span>
        <img src={PortfolioPNG} alt="Portfolio" data-aos="fade-right"/>
      </div>
      </div>
    );
  }
  
  export default WelcomePortfolio;
  