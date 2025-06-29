import { Link } from "react-router-dom"
import m from "./Kolo.module.css"
export const Kolo = () => {
   return (
    <div className={m.container}>
        <div className={m.dis}>
            <div className={m.lo}><img src="/images/Image.png" alt="" />
                <p>Особняк 1 393 м² </p>
                <p>2 499 010 $</p>
            </div>
            <div className={m.lo}>
                <img src="/images/Image-2.png" alt="" />
                <p>Особняк 970 м² </p>
                <p>3 958 803 $</p>
            </div>
            <div className={m.lo}><img src="/images/5ser.png" alt="" />
                <p>Вилла 1 278 м² </p>
                <p>71 896 553 $</p>
            </div>
            <div className={m.lo}><img src="/images/glavn0.png" alt="" />
                <p>Таунхаус 283 м²</p>
                <p>595 000 $</p>
            </div>
        </div>
    
    </div>


 )
}
