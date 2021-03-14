import  "../scss/SectionServices.scss";
import Design from "../../../img/design.png";
import DevelopSiteKey from "../../../img/develop-site-key.png";
import DevelopLogo from "../../../img/develop-logo.png";
import DevelopApp from "../../../img/develop-app.png";

function SectionServices() {

  const arrayServices= [
    {
      id: 'design',
    H: 'Дизайн сайтов',
    textDescription:'Ни один бизнес не может успешно развиваться, не имея собственного присутствия в глобальной сети. Сайт компании способен передать основной маркетинговый посыл, будучи идеальной площадкой для продажи товаров и услуг, а также продвижения идей. Креативные концептуальные идеи веб-дизайна дают нашим заказчиками конкурентное преимущество и инструментарий для представления и продвижения собственного бизнеса. Вы можете заказать дизайн веб сайтов от ведущей белорусской студии разработчиков.',
    textService1:'- Дизайн сайта (70 Бел. руб.)',
    textService2:'- Дизайн мобильного приложения ( 50 Бел. руб. )',
    textService3:'- Редизайн уже запущенного проекта ( 30 Бел. руб. )',
    srcIMG: Design,
    flexReverse: 'row',
    bgColor: '',
    colorText: '#0B2840', 

  },
  
  {
    id: 'site',
    H: 'Разработка сайтов под ключ',
    textDescription:'Компания Rudmals предлагает сделать сайт в Минске под ключ по оптимальной цене. Мы одинаково трепетно относимся к любому проекту от сайта-визитки до многопрофильного интернет-магазина. Каждый интернет-ресурс в нашем понимании должен тем или иным образом продавать.',
    textService1:'- Landing-page ( 180 Бел. руб. )',
    textService2:'- Сайт-визитка ( 250 Бел. руб. )',
    textService3:'- Корпоративный сайт ( 350 Бел. руб. )',
    textService4:'- Интернет магазин ( 600 Бел. руб. )',
    srcIMG: DevelopSiteKey,
    flexReverse: 'row-reverse',
    bgColor: '#5899FE',
    colorText: '#ffffff' 
  },

  {
    id: 'logo',
    H: 'Разработка логотипов',
    textDescription:'Имидж компании создается с помощью разных составляющих, одним из которых является оригинальный, неповторимый, уникальный логотип, который необходим для того, чтобы компанию и ее продукцию можно было проще идентифицировать на рынке. Заказать логотип вашей компании означает получение имиджевого продукта, который будет лицом вашего бизнеса, подчеркнет его преимущества и высокий уровень.',
    textService1:'- Разработка логотипов ( 20 Бел. руб. )',
    textService2:'- Создание иллюстраций ( 35 Бел. руб. )',
    srcIMG: DevelopLogo,
    flexReverse: 'row',
    bgColor: '',
    colorText: '#0B2840' 
  },


  {
    id: 'app',
    H: 'Разработка приложений ',
    textDescription:'Мы создадим такое ПО для мобильного устройства, которое будет действительно пользоваться популярностью у пользователей благодаря своему удобству и простоте использования.',
    textService1:'Разработка приложения ( Узнавать цену у программиста )',
    srcIMG: DevelopApp,
    flexReverse: 'row-reverse',
    bgColor: '#5899FE',
    colorText: '#ffffff' 
  },
  ]
    return (
      <div className="SectionServices">

  {arrayServices.map(arrayServices =>
  <div id={arrayServices.id} className="SectionServices-fone" style={{ backgroundColor: `${arrayServices.bgColor}`, padding: '50px 0 50px 0'}}>
     <div className="SectionServices-Container">
   <div className="services-text" style={{ flexDirection: `${arrayServices.flexReverse}` }}>
   <div className="text">
   <h3 style={{ color:`${arrayServices.colorText}` }}>{arrayServices.H}</h3>
   <p style={{ color:`${arrayServices.colorText}` }}>{arrayServices.textDescription}</p>
   <p style={{ color:`${arrayServices.colorText}` }}>{arrayServices.textService1}</p>
   <p style={{ color:`${arrayServices.colorText}` }}>{arrayServices.textService2}</p>
   <p style={{ color:`${arrayServices.colorText}` }}>{arrayServices.textService3}</p>
   <p style={{ color:`${arrayServices.colorText}` }}>{arrayServices.textService4}</p>
   </div>
   <img src={arrayServices.srcIMG} alt={arrayServices.alt} />
   </div>
   </div>
   </div>
    )}








     
     </div>
    );
  }
  
  export default SectionServices;
  