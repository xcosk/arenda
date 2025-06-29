import f from "./Header.module.css"
export const Header = () => {


   return (
    <div className={f.fon}>
        
        <div className={f.container}>
        <p className={f.bmw}>ДОМА ПРЕМИУМ<br /> КЛАССА В МОСКВЕ </p>
        <button className={f.btn} onClick={() => alert("+7(977) 471 49 10")} >Связаться с нами</button>
        </div>
    </div>
    
)

}