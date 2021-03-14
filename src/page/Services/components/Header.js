import "../scss/Header.scss";
import LeftClose from "../../svg/left-close.svg";
import { Link } from "react-router-dom";


function Header() {
    return (
      <div className="Header">
        <div className="Header-Container">
            <Link to="/" className="btn-close" >
            <img src={LeftClose} alt="Close"/>
            На Главную
            </Link>
        </div>
      </div>
    );
  }
  
  export default Header;
  