import { Link } from "react-router-dom"
import pr from "./Prem.module.css"
export const Prem = () => {
   return (
     <div className={pr.container}>
      <h2>Аренда автомобилей премиум-класса в Москве</h2>
      <div className={pr.divCar}>
      <Link  className={pr.Li}>
          <span>ПРЕМИУМ</span>
          <img src="/images/Lux.png" alt="" />
      </Link>
      <Link  to={"/Vned"}className={pr.Li}>
          <span>ВНЕДОРОЖНИКИ</span>
          <img src="/images/benz.png.png" alt="" />
      </Link>
      <Link to={"/Kabrio"} className={pr.Li}>
          <span>КАБРИОЛЕТЫ</span>
          <img src="/images/Cabri.png.png" alt="" />
      </Link>
      <Link className={`${pr.Li} ${pr.Il}`}>
          <span>СПОРТКАРЫ</span>
          <img src="/images/Sport_Car.png.png" alt="" />
      </Link>
      <Link className={`${pr.Li} ${pr.Il}`}>
          <span>КУПЕ</span>    
          <img src="/images/Coupe.png.png" alt="" />    
      </Link>
      <Link className={`${pr.Li} ${pr.Il}`}>
          <span>ВЕСЬ АВТОПАРК</span> 
          <img src="/images/All.png.png" alt="" />       
      </Link>
      </div>
      <div className={pr.dis}>
                  <div className={pr.lo}><img src="/images/kkk.png" alt="" />
                      <p>Аренда Maserati Levante</p>
                      <p>25.000 руб/сутки</p>
                  </div>
                  <div className={pr.lo}><img src="/images/ppp.png" alt="" />
                      <p>Аренда Rolls-Royce Wraith</p>
                      <p>75.000 руб/сутки</p>
                  </div>
                  <div className={pr.lo}><img src="/images/ll.png" alt="" />
                      <p>Аренда Mercedes - Benz G класс AMG 63</p>
                      <p>55.000 руб/сутки</p>
                  </div>
                  <div className={pr.lo}><img src="/images/hhh.png" alt="" />
                      <p>Аренда Mercedes S class W 223</p>
                      <p>90.000 руб/сутки</p>
                  </div>
              </div>
      </div>
   )

}