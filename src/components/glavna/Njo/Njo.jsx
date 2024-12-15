import { Link } from "react-router-dom"
import K from "./Njo.module.css"
export const Njo = () => {
   return (
    <div className={K.container}>
        <h1 className={K.lp}>Оставьте заявку на бронь</h1>
        <p className={K.lf}>Мы свяжемся с вами в течение 5 минут</p>
    </div>
   )
}