import style from "../styles/Footer.module.css"
import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <div className={style.Wrapper}>
            <hr/>
            <div className={style.WrapperList}>
                <Link to="/"><p>Inicio</p></Link>
                <Link to="/rooms"><p>Habitaciones</p></Link>
                <Link to="/amenities"><p>Comodidades</p></Link>
                <Link to="/location"><p>Cómo llegar</p></Link>
                <Link to="/contact"><p>Contacto</p></Link>
            </div>
            <p className={style.Copyright}>@2024 Mountains Development</p>
        </div>
    )
}