import { Link } from "react-router-dom"
import lv from "./Oolo.module.css"
export const Oolo = () => {
   return (
        <div className={lv.container}>
         <h1 className={lv.mu}>Почему мы</h1>
         <div className={lv.flex}>

            <div className={lv.m1}>
               <p className={lv.m0}>Проверенная база</p>
               <p className={lv.m2}> эксклюзивных предложений</p>
            </div>
            <div className={lv.fo}><img src="/images/1_43_1_1.jpg.png" alt="" /></div>
            <div className={lv.f2}>
               <p className={lv.m0}>Большой опыт работы</p>
               <p className={lv.m2}>и экспертиза во всех сегмента недвижимости</p>
            </div>
            <div><img src="/images/1_128_1.jpg.png" alt="" /></div>
            <div className={lv.r}>
               <p className={lv.m0}>    Индивидуальный </p>
               <p className={lv.m2}>подход к каждому клиент</p>
            </div>
            <div className={lv.g}>
               <p className={lv.m0}>Мы</p>
               <p className={lv.m2}>– обладатели самых престижных профессиональных наград</p>
            </div>
         </div>
           
         </div>
    )
   }