import "../scss/NavigationServices.scss";
import Ellipse from "../../svg/Ellipse.svg";

function NavigationServices1() {
    return (
      <div className="NavigationServices">
      <a className="btn" href="#design">
        <img src={Ellipse} />
        <snap>Дизайн сайтов</snap>
      </a>
      <a className="btn" href="#site">
        <img src={Ellipse} />
        <snap>Разработка сайтов под ключ</snap>
      </a>
      </div>
    );
  }
  
  export default NavigationServices1;
  