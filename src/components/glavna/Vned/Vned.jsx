import { Link } from "react-router-dom"
import pr from "./Vned.module.css"
export const Vned = () => {
   return (
     <div className={pr.container}>
      <h2>Таунхаусы</h2>
      <div className={pr.divCar}>
      <Link to={"/Prem"} className={pr.Li}>
               <span>Дома</span>
               <img src="/images/Lux1.png" alt="" />
           </Link>
           <Link  to={"/Vned"}className={pr.Li}>
               <span>Таунхаусы</span>
               <img src="/images/benz.png.png" alt="" />
           </Link>
           <Link to={"/Kabrio"} className={pr.Li}>
               <span>Особняки</span>
               <img src="/images/Cabri.png.png" alt="" />
           </Link>
           <Link to={"/Sport"} className={`${pr.Li} ${pr.Il}`}>
               <span>Участоки</span>
           </Link>
           <Link to={"/Cbr"} className={`${pr.Li} ${pr.Il}`}>
               <span>Пентхаус</span>     
           </Link>
           <Link className={`${pr.Li} ${pr.Il}`}>
               <span>Квартиры</span>       
           </Link>
      </div>
      <div className={pr.dis}>
                  <div className={pr.lo}><img src="/images/kkk2.png" alt="" />
                      <p>4-комн. таунхаус 268 м², 1-3 этаж - «Русские Сезоны»</p>
                      <p>59 879$</p>
                  </div>
                  <div className={pr.lo}><img src="/images/kmkkkmk.png" alt="" />
                      <p>7-комн. таунхаус 424 м², 1-3 этаж - «Берег Столицы»</p>
                      <p>50 879$</p>
                  </div>
                  <div className={pr.lo}><img src="/images/llllggk.png" alt="" />
                      <p>3-комн. таунхаус 196 м², -1-1 этаж - «Дом с Атлантами»</p>
                      <p>99 879$</p>
                  </div>
                  <div className={pr.lo}><img src="/images/popoopikli.png" alt="" />
                      <p>10-комн. таунхаус 784 м², 1-3 этаж - Золотые ключи-2</p>
                      <p>89 800$</p>
                  </div>
              </div>
      </div>
   )

}