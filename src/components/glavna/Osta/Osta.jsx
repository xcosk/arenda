import { Link } from "react-router-dom"
import p from "./Osta.module.css"
export const Osta = () => {
    return(
        <div>
            
       
        <div className={p.con}>
            <div className={p.flex}>
                <div className={p.box}>
                    <span className={p.fText}>77</span>
                    <span className={p.sText}>Автомобилей в автопарке Premium Car</span>
                </div>
                <div className={p.box}>
                    <span className={p.fText}>7</span>
                    <span className={p.sText}>На рынке премиальных авто в Москве</span>
                </div>
                <div className={p.box}>
                    <span className={p.fText}>900 млн.</span>
                    <span className={p.sText}>Рублей стоимость автомобилей Premium Car</span>
                </div>
            </div>
            <h2>Категории автомобилей</h2>
            <div className={p.divCar}>
            <Link className={p.Li}>
                <span>ПРЕМИУМ</span>
                <img src="/images/Lux.png" alt="" />
            </Link>
            <Link className={p.Li}>
                <span>ВНЕДОРОЖНИКИ</span>
                <img src="/images/benz.png.png" alt="" />
            </Link>
            <Link className={p.Li}>
                <span>КАБРИОЛЕТЫ</span>
                <img src="/images/Cabri.png.png" alt="" />
            </Link>
            <Link className={`${p.Li} ${p.Il}`}>
                <span>СПОРТКАРЫ</span>
                <img src="/images/Sport_Car.png.png" alt="" />
            </Link>
            <Link className={`${p.Li} ${p.Il}`}>
                <span>КУПЕ</span>    
                <img src="/images/Coupe.png.png" alt="" />    
            </Link>
            <Link className={`${p.Li} ${p.Il}`}>
                <span>ВЕСЬ АВТОПАРК</span> 
                <img src="/images/All.png.png" alt="" />       
            </Link>
            </div>
        </div>
        </div>
    )
}     