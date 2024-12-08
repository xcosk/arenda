import { NavLink, Outlet } from "react-router-dom"

export const Root = () => {
    return (
        <>
            <nav>
                <NavLink to={"Os"}>Premium</NavLink>
                <NavLink to={"Oss"}>Личный кабинет</NavLink>
                <NavLink></NavLink>
            </nav>
            <div>
                <Outlet />
            </div>
        </>
    )
}