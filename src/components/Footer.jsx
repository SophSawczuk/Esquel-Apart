import style from "../styles/Footer.module.css"
import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <div className={style.Wrapper}>
            <hr/>
            <div className={style.ContainerFlex}>
                <div className={style.WrapperList}>
                    <Link to="/"><p>Inicio</p></Link>
                    <Link to="/hospedaje"><p>Hospedaje</p></Link>
                    <Link to="/actividades"><p>¿Qué hacer en Esquel?</p></Link>
                    <Link to="/ubicacion"><p>Ubicación</p></Link>
                    <Link to="/contacto"><p>Contacto</p></Link>
                </div>
            </div>
            <Link to="https://mountains-development.netlify.app/" target="_blank" rel="noopener noreferrer"><p className={style.Copyright}>@2024 Mountains Development</p></Link>
        </div>
    )
}