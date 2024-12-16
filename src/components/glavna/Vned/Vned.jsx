import { Link } from "react-router-dom"
import pr from "./Vned.module.css"
export const Vned = () => {
   return (
     <div className={pr.container}>
      <h2>Аренда внедорожников <br />премиум-класса в Москве</h2>
      <div className={pr.divCar}>
      <Link to={"/Prem"} className={pr.Li}>
          <span>ПРЕМИУМ</span>
          <img src="/images/Lux.png" alt="" />
      </Link>
      <Link className={pr.Li}>
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
                  <div className={pr.lo}><img src="/images/kkkks.png" alt="" />
                      <p>Аренда Mercedes - Benz GLE 63S AMG</p>
                      <p>25.000 руб/сутки</p>
                  </div>
                  <div className={pr.lo}><img src="/images/ll.png" alt="" />
                      <p>Аренда Mercedes - Benz G класс AMG 63</p>
                      <p>55.000 руб/сутки</p>
                  </div>
                  <div className={pr.lo}><img src="/images/fkffk.png" alt="" />
                      <p>Аренда Mercedes - Benz G класс AMG 63</p>
                      <p>50.000 руб/сутки</p>
                  </div>
              </div>
      </div>
   )

}