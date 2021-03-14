import  "../scss/SectionPortfolio.scss";
import Pafix from "../../../img/site/pafix.PNG";
import Rudmals from "../../../img/site/rudmals.png";
import SmartService from "../../../img/site/smart-service.PNG";

function SectionPortfolio() {

  const arrayPortflio= [
    { link: 'http://pafix.by', name:"pafix.by", img: Pafix, alt:'Pafix' },
    { link: 'http://rudmals.by', name:"rudmals.by", img: Rudmals, alt:'Rudmals' },
    { link: 'http://smart-service.by', name:"smart-service.by", img: SmartService, alt:'Smart-service' },
    
  ]
    return (
      <div className="SectionPortfolio">
      <div className="SectionPortfolio-Container">
        {arrayPortflio.map(arrayPortflio =>
        <div className="Portfolio">
        <div className="link-site">
        <a className="link" href={arrayPortflio.link} target="_blank">
        {arrayPortflio.name}
        </a>
        </div>
        <div className="img-site">
        <img src={arrayPortflio.img} alt={arrayPortflio.alt} />
        </div>
        </div>
          )}

      
  
      </div>
  
      </div>

    );
  }
  
  export default SectionPortfolio;
  