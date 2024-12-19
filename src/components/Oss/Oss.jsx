import { Link } from "react-router-dom"
import ll from "./Oss.module.css"
export const Oss = () => {
    return (
        <div className={ll.container}>
            <p>Оставьте заявку на бронь <br />Мы свяжемся с Вами в течение 5 минут</p>
            <div>
                <div>
                    <div className={ll.jh}>
                        <div className={ll.bof}>
                        <input className={ll.im} placeholder="имя" type="text" /> 
                    </div>
                    <div className={ll.bof}>
                        <input className={ll.im} placeholder="+7 999 999 99 99" type="tel" />
                    </div>
                        <div className={ll.bof}>
                        <input className={ll.iim} type="date" />
                    </div>
                 </div>
                 </div>
            <button className={ll.bi} onClick={() => alert("Успешно,через 5 минут вам наберут.")} >Отправить</button>
            </div>
        </div>
    )
}