import "../scss/WelcomePortfolio.scss";
import PortfolioPNG from "../../../img/PortfolioPNG.png";

function WelcomePortfolio() {
    return (
      <div className="Welcome-Portfolio">
        <div className="Welcome-Container">
          <span>Портфолио</span>
        <img src={PortfolioPNG} alt="Portfolio" />
      </div>
      </div>
    );
  }
  
  export default WelcomePortfolio;
  