import style from "../styles/Comodidades.module.css"
import {AiOutlineWifi} from "react-icons/ai"

export default function Comodidades() {
    return(
        <div>
            <h2>Comodidades</h2>
            <div className={style.Container}>
                <div className={style.Card}>
                    <AiOutlineWifi className={style.Icon}/>
                    <h3>Wifi</h3>
                    <p><i>Libre y gratuito</i></p>
                </div>
                <div className={style.Card}>
                    <AiOutlineWifi className={style.Icon}/>
                    <h3>Wifi</h3>
                    <p><i>Libre y gratuito</i></p>
                </div>
                <div className={style.Card}>
                    <AiOutlineWifi className={style.Icon}/>
                    <h3>Wifi</h3>
                    <p><i>Libre y gratuito</i></p>
                </div>
                <div className={style.Card}>
                    <AiOutlineWifi className={style.Icon}/>
                    <h3>Wifi</h3>
                    <p><i>Libre y gratuito</i></p>
                </div>
                <div className={style.Card}>
                    <AiOutlineWifi className={style.Icon}/>
                    <h3>Wifi</h3>
                    <p><i>Libre y gratuito</i></p>
                </div>
                <div className={style.Card}>
                    <AiOutlineWifi className={style.Icon}/>
                    <h3>Wifi</h3>
                    <p><i>Libre y gratuito</i></p>
                </div>
            </div>
        </div>
    )
}