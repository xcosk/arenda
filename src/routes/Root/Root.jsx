import { NavLink, Outlet } from "react-router-dom"
import s from "./Root.module.css"

export const Root = () => {
    return (
        <>
            <nav className={s.nav}>
                <NavLink className={s.a} to={"/"}>CAR RENTAL</NavLink>
                <NavLink className={s.b} to={"Oss"}>Личный кабинет</NavLink>
                <div className={s.navDiv}>
                    <NavLink><img src="/images/whatsapp_2.png (1).svg" alt="" /></NavLink>
                    <NavLink><img src="/images/instagram_12.png.svg" alt="" /></NavLink>
                    <NavLink><img src="/images/telegram.png (2).svg" alt="" /></NavLink>
                    <NavLink><button className={s.sv} onClick={() => alert("+79774714910")} >Связаться с нами</button></NavLink>
                </div>
            </nav>
            <Outlet />
            <footer className={s.containerFoot}>
                <div className={s.foot}>
                    <input placeholder="имя" type="text" />
                    <input placeholder="+7 999 999 99 99" type="tel" />
                    <input type="date" />
                    <button className={s.bun} onClick={() => alert("Успешно")} >Забронировать</button>
                </div>
            </footer>
        </>
    )
}