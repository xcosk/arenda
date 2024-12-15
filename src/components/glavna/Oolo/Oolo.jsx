import { Link } from "react-router-dom"
import lv from "./Oolo.module.css"
export const Oolo = () => {
   return (
        <div className={lv.container}>
         <h1 className={lv.mu}>Почему мы</h1>
         <div className={lv.flex}>

            <div className={lv.m1}>
               <p className={lv.m0}>Страховка</p>
               <p className={lv.m2}>Полное покрытие КАСКО <br />и ОСАГО по Москве и МО.</p>
            </div>
            <div className={lv.fo}><img src="/images/1_43_1_1.jpg.png" alt="" /></div>
            <div className={lv.f2}>
               <p className={lv.m0}>Консьерж сервис</p>
               <p className={lv.m2}>Мы доставим автомобиль в <br />любую точку города.</p>
            </div>
            <div><img src="/images/1_128_1.jpg.png" alt="" /></div>
            <div className={lv.r}>
               <p className={lv.m0}>Консьерж сервис</p>
               <p className={lv.m2}>Мы доставим автомобиль в <br />любую точку города.</p>
            </div>
            <div className={lv.g}>
               <p className={lv.m0}>Помощь на <br />дороге</p>
               <p className={lv.m2}>При возникновении любых <br />трудностей, Вы всегда <br />можете связаться с нами и <br />мы решим все вопросы.</p>
            </div>
         </div>
           
         </div>
    )
   }