import BissnesMan1 from "../../../img/bissnesMan1.png";
import BissnesMan2 from "../../../img/bissnesMan2.png";
import BissnesMan3 from "../../../img/bissnesMan3.png";
import "../scss/ImgRight.scss";

function ImgRight(props) {

    return (
         <div className="ImgRight">
          <div className="Img-Man">
            {props.showImg1? <img src={BissnesMan1} alt="Man1"/>:null}
            {props.showImg2? <img src={BissnesMan2} alt="Man2"/>:null}
            {props.showImg3? <img src={BissnesMan3} alt="Man3"/>:null}
          </div>
            </div>  
    );
  }
  
  export default ImgRight;
  