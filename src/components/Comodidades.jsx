import style from "../styles/Comodidades.module.css"
import {AiOutlineWifi} from "react-icons/ai"
import foto2 from "../images/Foto2.jpg"
import esquel from "../images/atractivos-de-esquel.mp4"


export default function Comodidades() {
    return(
        <div className={style.Wrapper}>
            <div>
                <h1 className={style.Title}>¿Qué hacer en Esquel?</h1>
                <p className={style.Description}>Dale play al video para descubrir lugares imperdibles y las mejores actividades que puedes realizar en Esquel.</p>
            </div>
            
            <video className={style.Video} width="100%" height="65%" controls>
                        <source src={esquel} type="video/mp4"/>
            </video>
        </div>
    )
}