import { Link } from "react-router-dom"
import p from "./Osta.module.css"
export const Osta = () => {
    return(
        <div className={p.container}>
        <div className={p.con}>
            <div className={p.flex}>
                <div className={p.box}>
                    <span className={p.fText}>25.</span>
                    <span className={p.sText}>Домов на продаже <br />FGT</span>
                </div>
                <div className={p.box}>
                    <span className={p.fText}>1 год.</span>
                    <span className={p.sText}>На рынке недвижимость в Москве</span>
                </div>
                <div className={p.box}>
                    <span className={p.fText}>Болле 100</span>
                    <span className={p.sText}>Успешных сделок ! <br /> FGT</span>
                </div>
            </div>
            <h2>Категории </h2>
            <div className={p.divCar}>
            <Link to={"Prem"} className={p.Li}>
                <span>Дома</span>
                <img src="/images/Lux1.png" alt="" />
            </Link>
            <Link  to={"Vned"} className={p.Li}>
                <span>Таунхаус</span>
                <img src="/images/benz.png.png" alt="" />
            </Link>
            <Link to={"Kabrio"} className={p.Li}>
                <span>Особняк</span>
                <img src="/images/Cabri.png.png" alt="" />
            </Link>
            <Link to={"Sport"} className={`${p.Li} ${p.Il}`}>
                <span>Участки</span>
            </Link>
            <Link to={"Cbr"} className={`${p.Li} ${p.Il}`}>
                <span>Пентхаус</span>        
            </Link>
            <Link to={"Vse"} className={`${p.Li} ${p.Il}`}>
                <span>Квартиры</span>      
            </Link>
            </div>
        </div>
        </div>
    )
}     