import style from "../styles/Burguer.module.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Burguer({setOpen}) {
    const navigate = useNavigate();

    function closeMenu(e) {
        e.preventDefault()
        setOpen(false)
    }
    return(
        <div className={style.Container}>
            <h5 onClick={(e) => {navigate("/"); closeMenu(e)}}>Inicio</h5>
            <h5 onClick={(e) => {navigate("/hospedaje"); closeMenu(e)}}>Hospedaje</h5>
            <h5 onClick={(e) => {navigate("/actividades"); closeMenu(e)}}>¿Qué hacer en Esquel?</h5>
            <h5 onClick={(e) => {navigate("/ubicacion"); closeMenu(e)}}>Ubicación</h5>
            <h5 onClick={(e) => {navigate("/contacto"); closeMenu(e)}}>Contacto</h5>
        </div>
    )
}

//queda como tarea ver cómo exporta el state para poder setear el estado del menu.