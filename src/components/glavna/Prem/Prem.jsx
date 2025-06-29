import { Link } from "react-router-dom"
import pr from "./Prem.module.css"
export const Prem = () => {
   return (
     <div className={pr.container}>
      <h2>Дома</h2>
      <div className={pr.divCar}>
      <Link  className={pr.Li}>
          <span>Дома</span>
          <img src="/images/Lux1.png" alt="" />
      </Link>
      <Link  to={"/Vned"}className={pr.Li}>
          <span>Таунхаус</span>
          <img src="/images/benz.png.png" alt="" />
      </Link>
      <Link to={"/Kabrio"} className={pr.Li}>
          <span>Особняк</span>
          <img src="/images/Cabri.png.png" alt="" />
      </Link>
      <Link  to={"/Sport"}className={`${pr.Li} ${pr.Il}`}>
          <span>Участоки</span>
          
      </Link>
      <Link to={"/Cbr"} className={`${pr.Li} ${pr.Il}`}>
          <span>Пентхаус</span>    
           
      </Link>
      <Link to={"/Vse"} className={`${pr.Li} ${pr.Il}`}>
          <span>Квартиры</span>       
      </Link>
      </div>
      <div className={pr.dis}>
                  <div className={pr.lo}><img src="/images/kkk.png" alt="" />
                      <p>Дом 1200 м² в коттеджном поселке «Жуковка 3»</p>
                      <p>59 879$</p>
                  </div>
                  <div className={pr.lo}><img src="/images/ppp.png" alt="" />
                      <p>Дом 730 м² в коттеджном поселке «Горки 8»</p>
                      <p>50 879$</p>
                  </div>
                  <div className={pr.lo}><img src="/images/ll.png" alt="" />
                      <p>Дом 545 м² в коттеджном поселке «ЗаОзерье»</p>
                      <p>99 879$</p>
                  </div>
                  <div className={pr.lo}><img src="/images/hhh.png" alt="" />
                      <p>Дом 1200 м² в коттеджном поселке «Жуковка 3»</p>
                      <p>89 879$</p>
                  </div>
              </div>
      </div>
   )

}