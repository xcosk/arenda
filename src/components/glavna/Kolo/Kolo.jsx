import { Link } from "react-router-dom"
import m from "./Kolo.module.css"
export const Kolo = () => {
   return (
    <div className={m.container}>
        <div className={m.dis}>
            <div className={m.lo}><img src="/images/Image.png" alt="" />
                <p>Аренда Rolls-Royce Cullinan Black</p>
                <p>110.000 руб/сутки</p>
            </div>
            <div className={m.lo}><img src="/images/Image-2.png" alt="" />
                <p>Аренда Rolls-Royce Cullinan Black</p>
                <p>110.000 руб/сутки</p>
            </div>
            <div className={m.lo}><img src="/images/Image-3.png" alt="" />
                <p>Аренда Lamborghini Urus Black</p>
                <p>80.000 руб/сутки</p>
            </div>
            <div className={m.lo}><img src="/images/Image-4.png" alt="" />
                <p>Аренда Lamborghini Urus</p>
                <p>80.000 руб/сутки</p>
            </div>
        </div>
    
    </div>


 )
}
