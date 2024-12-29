import style from "../styles/ComodidadesHome.module.css"
import {AiOutlineWifi} from "react-icons/ai"
import { AiOutlineAudit } from "react-icons/ai"
import { AiOutlineAlert } from "react-icons/ai"
import { AiOutlineCoffee } from "react-icons/ai"

export default function ComodidadesHome() {
    return(
        <div className={style.Container}>
            <div className={style.FirstCard}>
                <AiOutlineAudit className={style.Icon}/>
                <h3>Confianza</h3>
                <li>14 años de trayectoria en Esquel como complejo turístico.</li>
                <li>Habilitado por el Ministerio de Turismo de la Provincia de Chubut.</li>
                <li>Habilitado por la Secretaría de Turismo de la Municipalidad de Esquel.</li>
                <br/>
                <br/>
                <br/>
            </div>
            <div className={style.FirstCard}>
                <AiOutlineAlert className={style.Icon}/>
                <h3>Seguridad</h3>
                <li>Seguros de Responsabilidad Civil e Incendios.</li>
                <li>Video cámaras, alarmas y Cajas de Seguridad en todas las unidades habitacionales.</li>
                <li>Cocheras individuales y linderas a cada Unidad Habitacional.</li>
                <br/>
                <br/>
                <br/>
            </div>
            <div className={style.FirstCard}>
                <AiOutlineCoffee className={style.Icon}/>
                <h3>Comodidad</h3>
                <li>Distintos tipos de Unidades (LOFT-DUPLEX-CASA) acordes a cada presupuesto y necesidad.</li>
                <li>Servicios de mucama diario c/recambio de ropa blanca cada 3 noches.</li>
                <li>Desayuno opcional completo, servicio en su unidad habitacional.</li>
                <li>Parrillas individuales en los DUPLEX Y LA CASA, y quincho con fogón parrilla en los LOFT con previa reserva.</li>
            </div>
        {/* <div className={style.FirstCard}>
            <AiOutlineWifi className={style.Icon}/>
            <h3>Wi-Fi</h3>
            <p><i>De alta velocidad</i></p>
        </div>
        <div className={style.FirstCard}>
            <AiOutlineWifi className={style.Icon}/>
            <h3>Seguridad</h3>
            <p><i>Alarmas y cajas de seguridad</i></p>
        </div>
        <div className={style.FirstCard}>
            <AiOutlineWifi className={style.Icon}/>
            <h3>Estacionamiento</h3>
            <p><i>Exclusivo para cada unidad</i></p>
        </div>
        <div className={style.FirstCard}>
            <AiOutlineWifi className={style.Icon}/>
            <h3>Cocina equipada</h3>
            <p><i>Electrodomésticos de alta gama</i></p>
        </div> */}
        </div>
    )
}