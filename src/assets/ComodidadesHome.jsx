import style from "../styles/ComodidadesHome.module.css"
import {AiOutlineWifi} from "react-icons/ai"

export default function ComodidadesHome() {
    return(
        <div className={style.Container}>
        <div className={style.FirstCard}>
            <AiOutlineWifi className={style.Icon}/>
            <h3>Wifi</h3>
            <p><i>Libre y gratuito</i></p>
        </div>
        <div className={style.FirstCard}>
            <AiOutlineWifi className={style.Icon}/>
            <h3>Wifi</h3>
            <p><i>Libre y gratuito</i></p>
        </div>
        <div className={style.FirstCard}>
            <AiOutlineWifi className={style.Icon}/>
            <h3>Wifi</h3>
            <p><i>Libre y gratuito</i></p>
        </div>
        <div className={style.FirstCard}>
            <AiOutlineWifi className={style.Icon}/>
            <h3>Wifi</h3>
            <p><i>Libre y gratuito</i></p>
        </div>
    </div>
    )
}