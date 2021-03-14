import "../scss/NavigationServices.scss";
import Ellipse from "../../svg/Ellipse.svg";

function NavigationServices1() {
    return (
      <div className="NavigationServices">
      <a className="btn" href="#logo">
        <img src={Ellipse} />
        <snap>Разработка логотипов</snap>
      </a>
      <a className="btn" href="#app">
        <img src={Ellipse} />
        <snap>Разработка приложений </snap>
      </a>
      </div>
    );
  }
  
  export default NavigationServices1;
  