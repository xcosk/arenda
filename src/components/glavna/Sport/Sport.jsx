import { Link } from "react-router-dom"
import pr from "./Sport.module.css"
export const Sport = () => {
   return (
     <div className={pr.container}>
      <h2>Участоки</h2>
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
      <Link className={`${pr.Li} ${pr.Il}`}>
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
                  <div className={pr.lo}><img src="/images/911prк.png" alt="" />
                      <p>Земельный участок 1040 сот. в коттеджном поселке «Поречье </p>
                      <p>59 879$</p>
                  </div>
                  <div className={pr.lo}><img src="/images/m555.png" alt="" />
                      <p>Земельный участок 158 сот. в коттеджном поселке «Николино»</p>
                      <p>50 879$</p>
                  </div>
                  <div className={pr.lo}><img src="/images/mmmmkkkaaa.png" alt="" />
                      <p>Земельный участок 1040 сот. в коттеджном поселке «Поречье»</p>
                      <p>45 000$</p>
                  </div>
                  <div className={pr.lo}><img src="/images/kfkkkdf.png" alt="" />
                      <p>АЗемельный участок 18 сот. в коттеджном поселке «Кунцево»</p>
                      <p>40 000$</p>
                  </div>
              </div>
      </div>
   )

}