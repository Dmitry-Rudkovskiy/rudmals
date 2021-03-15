import "../scss/Contact.scss";
import ContactPNG from "../../../img/Contact.png";
import { Social } from "../../import";
import Close from "../../svg/close.svg";

function Contact(props) {
    return (
      <>
         <div className="Contact">
           <div className="Container">
           <div className="Contact_info">
           <div className="Close">
           <img src={Close} onClick={props.noShowModalClick} alt="Close"/>
           </div>
               <img className="ContactIMG" src={ContactPNG} />
               <p>Звонки принимаем с 9 00 до 21 00</p>
               <a href="tel:+375298951128"><b>+375(29)895-11-28</b></a>
               <div className="Adress">
               <span>Адрес</span>
               <p>Беларусь ул. Юбилейная 11 к 400</p>
               </div>
               <Social className="Social" />
               </div> 
           </div>  
            </div>  
            </>
    );
  }
  
  export default Contact;
  