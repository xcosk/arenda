import { Link } from "react-router-dom"
import m from "./Kolo.module.css"
export const Kolo = () => {
   return (
    <div className={m.container}>
        <div className={m.dis}>
            <div className={m.lo}><img src="/images/Image.png" alt="" />
                <p>Аренда Rolls-Royce Cullinan Black</p>
                <p>110.000 руб/сутки</p>
            </div>
            <div className={m.lo}><img src="/images/Image-2.png" alt="" />
                <p>Аренда Rolls-Royce Cullinan Black</p>
                <p>110.000 руб/сутки</p>
            </div>
            <div className={m.lo}><img src="/images/Image-3.png" alt="" />
                <p>Аренда Lamborghini Urus Black</p>
                <p>80.000 руб/сутки</p>
            </div>
            <div className={m.lo}><img src="/images/Image-4.png" alt="" />
                <p>Аренда Lamborghini Urus</p>
                <p>80.000 руб/сутки</p>
            </div>
        </div>

        <div className={m.mo}><p>Три простых шага для аренды автомобиля</p></div>

        <div className={m.hak}>
                <div className={m.cnopk1}>
            <p>01.</p>
            </div>
            <p className={m.cl1}>Заявка в WhatsApp <br/>или Telegram</p>
        <div className={m.cnopk2}>
            <p>02.</p>
            </div>
            <p className={m.cl1}>Доставка автомобиля <br/>в любую точку Москвы</p>
        <div className={m.cnopk3}>
                <p>03.</p>
            </div>
            <p className={m.cl1}>Подписание договора<br/>аренды за 10 минут</p>
        
        </div>
    
    </div>


 )
}
