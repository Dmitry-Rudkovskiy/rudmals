import "../scss/Contact.scss";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ContactPNG from "../../../img/Contact.png";
import { Social } from "../../import";
import Close from "../../svg/close.svg";


function Contact(props) {

  AOS.init()
    return (
      <>
      <div className="blur">

      </div>
         <div className="Contact" data-aos="zoom-in">
           <div className="Container">
           <div className="Contact_info">
           <div className="Close">
           <a href="#"><img src={Close} onClick={props.noShowModalClick} alt="Close"/></a>
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
  