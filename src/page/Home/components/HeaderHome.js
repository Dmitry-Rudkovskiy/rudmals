import Logo from "../../svg/logo.svg";
import Menu from "../../svg/menu.svg";
import "../scss/HeaderHome.scss";

function HeaderHome(props) {
    return (
      <>
      <div className="Menu" style={{display: props.showMenuBurger}}>
      <img onClick={props.showBlockMenu} src={Menu} alt="Menu"/>
      </div>
         <div className="Header-Home">
           <div className="Container">
           <div className="Logo-Name">
           <img src={Logo} alt="Logo"/>
           <h2>Rudmals</h2>
           </div> 
           </div>  
           <hr/>
            </div>  
            </>
    );
  }
  
  export default HeaderHome;
  