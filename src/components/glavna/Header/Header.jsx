import f from "./Header.module.css"
export const Header = () => {


   return (
    <div className={f.fon}>
        
        <div className={f.container}>
        <p className={f.bmw}>АРЕНДА АВТО ПРЕМИУМ <br /> КЛАССА В МОСКВЕ</p>
        <button className={f.btn} onClick={() => alert("+79774714910")} >Связаться с нами</button>
        </div>
    </div>
    
)

}