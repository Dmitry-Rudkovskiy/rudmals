
import {useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useDispatch, useSelector } from "react-redux";
import Close from "../svg/close.svg";
import "./scss/Home.scss";
import { 
  SHOW_SITE_DEVELOP_FORM,
  SHOW_SITE_DEVELOP_DESING, 
  SHOW_IMG_1,
  SHOW_IMG_2,
  SHOW_IMG_3,
  SHOW_MENU, 
  SHOW_MENU_BURGER,
  SHOW_MODAL,
  } from "../../redux/action";
import {
  TextHome,
  HeaderHome,
  Form, 
  Contact,
  ImgRight, 
  Navigation, 
  Social
} from "../import";

function Home() {

  AOS.init();


  const dispatch = useDispatch()
  const {
     showMenu,
     showMenuBurger,
     showSiteDevelopForm,
     showDevelopDesing,
     showImg1,
     showImg2,
     showImg3,
     showModal
  } = useSelector(state => state )

//controlForm
  const [controlServices, setControlServices] = useState();
  // const [controlDesing, setControlDesing] = useState();
  // const [controlSite, setControlSite] = useState();
  // const [controlName, setControlName] = useState();
  // const [controlEmail, setControlEmail] = useState();
  // const [controlText, setControlText] = useState();


 const onChange = 
    (e) => {
        const ValueForm = e.target.value
        setControlServices(ValueForm)
      switch (ValueForm) {
        case 'Создание сайта под ключ':
          dispatch(SHOW_SITE_DEVELOP_FORM(true))
          dispatch(SHOW_SITE_DEVELOP_DESING(false))
          dispatch(SHOW_IMG_1(true))
          dispatch(SHOW_IMG_2(false))
          dispatch(SHOW_IMG_3(false))
          break;

        case 'Дизайн':
          dispatch(SHOW_SITE_DEVELOP_FORM(false))
          dispatch(SHOW_SITE_DEVELOP_DESING(true))
          dispatch(SHOW_IMG_1(false))
          dispatch(SHOW_IMG_2(true))
          dispatch(SHOW_IMG_3(false))
          break;
      
        case 'Разработка приложний на Android':
          dispatch(SHOW_SITE_DEVELOP_FORM(false))
          dispatch(SHOW_SITE_DEVELOP_DESING(false))
          dispatch(SHOW_IMG_1(false))
          dispatch(SHOW_IMG_2(false))
          dispatch(SHOW_IMG_3(true))
          break;
      
      
        default:
        return null
      }
    } 

    const styleMenu = {
      display: showMenu,
    }

    const showBlockMenu = () =>{
      dispatch(SHOW_MENU('block'))
      dispatch(SHOW_MENU_BURGER('none'))
    }

    const NOshowBlockMenu = () =>{
      dispatch(SHOW_MENU('none'))
      dispatch(SHOW_MENU_BURGER('block'))
    }


const showModalClick = () =>{
  dispatch(SHOW_MODAL(true))
}
const noShowModalClick = () =>{
  dispatch(SHOW_MODAL(false))
}


    return (
      <div className="Home"
      style = {{overflow: !showModal == false ? 'hidden' : null &&
      !showModal == true ? 'scroll' : null
      }}
      >
                {!showModal == false ? <Contact 
                noShowModalClick = {noShowModalClick}
                />: null}
        <div className="Container">
        <div className="Section-Left" data-aos="fade-right">
        <div className="Section-Left-Container">

        <HeaderHome 
        showBlockMenu = {showBlockMenu}
        showMenuBurger = {showMenuBurger}
        />
        <TextHome />
        <Form
        onChange = {onChange}
        controlServices={controlServices}
        showSiteDevelopForm = {showSiteDevelopForm}
        showDevelopDesing = {showDevelopDesing}


        />


            </div>
        </div>

        <div className="Section-Right" style={styleMenu} data-aos="fade-left">

        <div className="Close" onClick={NOshowBlockMenu}>
      <img src={Close} alt="Close"/>
      </div>

        <div className="Section-Right-Container">
        <div className="Container-fixed">
        <Navigation 
        showModalClick = {showModalClick}
        />
        <ImgRight
        showImg1 = {showImg1}
        showImg2 = {showImg2}
        showImg3 = {showImg3}
        />
        <Social/>
        </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  