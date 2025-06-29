import { Link } from "react-router-dom"
import pr from "./Kabrio.module.css"
export const Kabrio = () => {
    return(
         <div className={pr.container}>
              <h2>Особняки за границей</h2>
              <div className={pr.divCar}>
              <Link to={"/Prem"} className={pr.Li}>
                  <span>Дом</span>
                  <img src="/images/Lux1.png" alt="" />
              </Link>
              <Link to={"/Vned"} className={pr.Li}>
                  <span>Таунхаус</span>
                  <img src="/images/benz.png.png" alt="" />
              </Link>
              <Link className={pr.Li}>
                  <span>Особняк</span>
                  <img src="/images/Cabri.png.png" alt="" />
              </Link>
              <Link to={"/Sport"} className={`${pr.Li} ${pr.Il}`}>
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
                          <div className={pr.lo}><img src="/images/hkkhkhgh.png" alt="" />
                              <p>Особняк 2 300 м² в Риме в Италии</p>
                              <p>49 999 879$</p>
                          </div>
                      </div>
              </div>
           )
        
        }
    