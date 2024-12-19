import { Link } from "react-router-dom"
import pr from "./Kabrio.module.css"
export const Kabrio = () => {
    return(
         <div className={pr.container}>
              <h2>Аренда кабриолетов в Москве</h2>
              <div className={pr.divCar}>
              <Link to={"/Prem"} className={pr.Li}>
                  <span>ПРЕМИУМ</span>
                  <img src="/images/Lux.png" alt="" />
              </Link>
              <Link to={"/Vned"} className={pr.Li}>
                  <span>ВНЕДОРОЖНИКИ</span>
                  <img src="/images/benz.png.png" alt="" />
              </Link>
              <Link className={pr.Li}>
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
              <Link to={"/Vse"} className={`${pr.Li} ${pr.Il}`}>
                  <span>ВЕСЬ АВТОПАРК</span> 
                  <img src="/images/All.png.png" alt="" />       
              </Link>
              </div>
              <div className={pr.dis}>
                          <div className={pr.lo}><img src="/images/hffh.png" alt="" />
                              <p>Аренда BMW M850 CABRIO</p>
                              <p>45.000 руб/сутки</p>
                          </div>
                      </div>
              </div>
           )
        
        }
    