import "../scss/Social.scss";
import Instagram from "../../svg/instagram.svg";
import Telegram from "../../svg/telegram.svg";
import Viber from "../../svg/viber.svg";

function Social() {
    return (
         <div className="Social">
        <div className="Container">
        <a href="vk.com">
        <img src={Instagram} alt="Instagram" />
        </a>
        <a href="vk.com">
        <img src={Telegram} alt="Telegram" />
        </a>
        <a href="vk.com">
        <img src={Viber} alt="Viber" />
        </a>
        </div> 
            </div>  
    );
  }
  
  export default Social;
  