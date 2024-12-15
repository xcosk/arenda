import { Header } from "./Header/Header"
import { Kolo } from "./Kolo/Kolo"
import { Osta } from "./Osta/Osta"
import { Oolo } from "./Oolo/Oolo"
import { Njo } from "./Njo/Njo"

export const MainPage = () => {
    return (
        <>
        <Header />
        <Osta />
        <Kolo />
        <Oolo />
        <Njo />
        </>
    )
}