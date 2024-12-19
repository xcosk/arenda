import { Link } from "react-router-dom"
import pr from "./Vse.module.css"
export const Vse = () => {
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
      <Link to={"/Cbr"} className={`${pr.Li} ${pr.Il}`}>
          <span>КУПЕ</span>    
          <img src="/images/Coupe.png.png" alt="" />    
      </Link>
      <Link className={`${pr.Li} ${pr.Il}`}>
          <span>ВЕСЬ АВТОПАРК</span> 
          <img src="/images/All.png.png" alt="" />       
      </Link>
      </div>
      <div className={pr.dis}>
                  <div className={pr.lo}><img src="/images/5ser.png" alt="" />
                      <p>Аренда BMW X5 xDrive 40i AT</p>
                      <p>22.000 руб/сутки</p>
                  </div>
                  <div className={pr.lo}><img src="/images/cadilac.png" alt="" />
                      <p>Аренда Cadillac Escaled 600</p>
                      <p>39.000 руб/сутки</p>
                  </div>
                  <div className={pr.lo}><img src="/images/lamba.png" alt="" />
                      <p>Аренда Lamborghini Aventador SVJ Roadster 800 Limit</p>
                      <p>200.000 руб/сутки</p>
                  </div>
                  <div className={pr.lo}><img src="/images/911porshe.png" alt="" />
                      <p>Аренда Porsche 911 Turbo S VIII</p>
                      <p>60.000 руб/сутки</p>
                  </div>
              </div>
      </div>
   )

}