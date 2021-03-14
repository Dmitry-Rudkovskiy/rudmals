import React, { useState } from "react";
import "../scss/Form.scss";

function Form(props) {


    return (
         <div className="Form">
         <p>
        Заполните БРИФ, укажите все ваши предпочтения и потребности.
        Наши программисты ответят вам в течении 24 часов 
         </p>
         
<form method="post" >
        <div className="Input-Label">
        <label htmlFor="POST-name">Услуги</label>
        <select className="Input-Style" 
        onChange={(e) => props.onChange(e)}
        name="Uslugi" size="1">
        <option value="Создание сайта под ключ">Создание сайта под ключ</option>
        <option value="Дизайн">Дизайн</option>
        <option value="Разработка приложний на Android">Разработка приложний на Android</option>
        </select>
        
        </div>


        {props.showSiteDevelopForm?(
 <div className="Input-Label">
 <label htmlFor="POST-name">Вид сайта</label>
 <select className="Input-Style" name="viewSite" size="1">
 <option value="Landing-page">Landing-page</option>
 <option value="Сайт-визитка">Сайт-визитка</option>
 <option value="Корпоративный сайт">Корпоративный сайт</option>
 <option value="Сайт-каталог">Сайт-каталог</option>
 <option value="Интернет магазин">Интернет магазин</option>
 </select>
 </div> 
        ):null
    }


        {props.showDevelopDesing?(
 <div className="Input-Label">
 <label htmlFor="POST-name">Дизайн</label>
 <select className="Input-Style" name="viewDesing" size="1">
 <option value="Дизайн сайта" >Дизайн сайта</option>
 <option value="Дизайн приложения">Дизайн приложения</option>
 <option value="Разработка логотипа">Разработка логотипа</option>
 <option value="Сайт-каталог">Сайт-каталог</option>
 <option value="Интернет магазин">Интернет магазин</option>
 </select>
 </div> 
        ):null
    }





             <div className="Input-Label">
            <label htmlFor="POST-name">Полное имя</label>
            <input className="Input-Style" id="POST-name" type="text" name="nameUser" placeholder="Петя Петров" required/>
             </div>

             <div className="Input-Label">
            <label htmlFor="POST-name">Электронная почта</label>
            <input className="Input-Style" id="POST-name" type="text" name="Mail" placeholder="info@mail.ru" required />
             </div>


             <div className="Input-Label">
            <label htmlFor="POST-name">Опишите пожелания</label>
            <textarea className="Input-Style" rows="8" name="text" required></textarea>
             </div>


             <div className="submit">
                 <button type="submit">
                     Отправить форму
                 </button>
             </div>
</form>
            </div>  
    );
  }
  
  export default Form;
  