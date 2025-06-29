import { Link } from "react-router-dom"
import pr from "./Vse.module.css"
export const Vse = () => {
   return (
     <div className={pr.container}>
      <h2>Квартиры</h2>
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
                  <div className={pr.lo}><img src="/images/5ser.png" alt="" />
                      <p>Квартира 82 м² в ЖК «Довиль»</p>
                      <p>59 879$</p>
                  </div>
                  <div className={pr.lo}><img src="/images/cadilac.png" alt="" />
                      <p>Квартира 78 м² в ЖК «Vnukovo Country Club ЖК»</p>
                      <p>50 879$</p>
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