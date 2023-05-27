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
            <h5 onClick={(e) => {navigate("/rooms"); closeMenu(e)}}>Habitaciones</h5>
            <h5 onClick={(e) => {navigate("/amenities"); closeMenu(e)}}>Comodidades</h5>
            <h5 onClick={(e) => {navigate("/location"); closeMenu(e)}}>Cómo llegar</h5>
            <h5 onClick={(e) => {navigate("/contact"); closeMenu(e)}}>Contacto</h5>
        </div>
    )
}

//queda como tarea ver cómo exporta el state para poder setear el estado del menu.