import { Link } from "react-router-dom"
import pr from "./Cbr.module.css"
export const Cbr = () => {
   return (
     <div className={pr.container}>
      <h2>Пентхаус</h2>
      <div className={pr.divCar}>
      <Link to={"/Prem"} className={pr.Li}>
          <span>Дом</span>
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
      <Link to={"/Sport"} className={`${pr.Li} ${pr.Il}`}>
          <span>Участки</span>
      </Link>
      <Link className={`${pr.Li} ${pr.Il}`}>
          <span>Пентхаус</span>       
      </Link>
      <Link to={"/Vse"} className={`${pr.Li} ${pr.Il}`}>
          <span>Квартиры</span> 
      </Link>
      </div>
      <div className={pr.dis}>
                  <div className={pr.lo}><img src="/images/911pr.png" alt="" />
                      <p>13-комн. пентхаус 952 м², 8 этаж - «Гранатный, 8стр4»</p>
                      <p>59 879$</p>
                  </div>
                  <div className={pr.lo}><img src="/images/m5.png" alt="" />
                      <p>А7-комн. пентхаус 457 м², 2 этаж - «Фамильный Дом Воробьево»</p>
                      <p>40 879$</p>
                  </div>
                  <div className={pr.lo}><img src="/images/hffh.png" alt="" />
                      <p>4-комн. пентхаус 374 м², 6 этаж - «Особняк в Хилковом переулке»</p>
                      <p>99 879$</p>
                  </div>
                  <div className={pr.lo}><img src="/images/m4.png" alt="" />
                      <p>4-комн. пентхаус 274 м², 7 этаж - «Дворянское гнездо»</p>
                      <p>40 000$</p>
                  </div>
              </div>
      </div>
   )

}