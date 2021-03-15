import "../scss/Navigation.scss";
import { Link } from 'react-router-dom';

function Navigation(props) {
    return (
         <>
         <div className="Navigation">
        <div className="Navigation-Container">
        <div className="Button-nav">
        <Link to="/services" className="btn">
         Услуги   
        </Link>


        <Link to="/portfolio" className="btn">
         Портфолио   
        </Link>


        <Link onClick ={props.showModalClick} className="btn">
         Контакты   
        </Link>
       
       </div>

       </div>  
            </div>  
            </>
    );
  }
  
  export default Navigation;
  