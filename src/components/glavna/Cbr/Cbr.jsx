import { Link } from "react-router-dom"
import pr from "./Cbr.module.css"
export const Cbr = () => {
   return (
     <div className={pr.container}>
      <h2>Аренда  премиум-класса в Москве</h2>
      <div className={pr.divCar}>
      <Link to={"/Prem"} className={pr.Li}>
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
      <Link to={"/Sport"} className={`${pr.Li} ${pr.Il}`}>
          <span>СПОРТКАРЫ</span>
          <img src="/images/Sport_Car.png.png" alt="" />
      </Link>
      <Link className={`${pr.Li} ${pr.Il}`}>
          <span>КУПЕ</span>    
          <img src="/images/Coupe.png.png" alt="" />    
      </Link>
      <Link to={"/Vse"} className={`${pr.Li} ${pr.Il}`}>
          <span>ВЕСЬ АВТОПАРК</span> 
          <img src="/images/All.png.png" alt="" />       
      </Link>
      </div>
      <div className={pr.dis}>
                  <div className={pr.lo}><img src="/images/911pr.png" alt="" />
                      <p>Аренда Porsche 911 Carrera 4s</p>
                      <p>40.000 руб/сутки</p>
                  </div>
                  <div className={pr.lo}><img src="/images/m5.png" alt="" />
                      <p>Аренда BMW М5 Competition</p>
                      <p>45.000 руб/сутки</p>
                  </div>
                  <div className={pr.lo}><img src="/images/hffh.png" alt="" />
                      <p>Аренда BMW M8 Competition</p>
                      <p>55.000 руб/сутки</p>
                  </div>
                  <div className={pr.lo}><img src="/images/m4.png" alt="" />
                      <p>Аренда BMW M440</p>
                      <p>40.000 руб/сутки</p>
                  </div>
              </div>
      </div>
   )

}