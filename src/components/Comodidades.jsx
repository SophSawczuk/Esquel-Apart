import style from "../styles/Comodidades.module.css"
import {AiOutlineWifi} from "react-icons/ai"
import foto2 from "../images/Foto2.jpg"

export default function Comodidades() {
    return(
        <div className={style.Wrapper}>
            <h3 className={style.Title}>Comodidades</h3>
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
            <img src={foto2} className={style.Imagen}/>
        </div>
    )
}