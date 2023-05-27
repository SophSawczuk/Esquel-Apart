import style from "../styles/NavBar.module.css"
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai"
import { IconContext } from "react-icons";
import { useState } from "react";
import Burguer from "../assets/Burguer";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();

    const menuClosed = <AiOutlineMenu
                    style={{"color": "white", "padding-right": "5vw", "width": "1.5em", "height":"1.5em"}}
                    onClick={() => setOpen(!open)}
                />
    const menuOpen = 
            <div>
              <AiOutlineMenu
                style={{"color": "white", "padding-right": "5vw", "width": "1.5em", "height":"1.5em"}}
                onClick={() => setOpen(!open)}
                />
                
            </div>
    function closeMenuWithLogo(e) {
        e.preventDefault()
        setOpen(false)
    }      

    return(
        <div className={style.Container}>
            <div className={style.Desktop}>
                <Link to="/"><h2>Logo</h2></Link>
                <div className={style.List}>
                    <Link to="/rooms"><h5>Habitaciones</h5></Link>
                    <Link to="/amenities"><h5>Comodidades</h5></Link>
                    <Link to="/location"><h5>Cómo llegar</h5></Link>
                    <Link to="/contact"><h5>Contacto</h5></Link>
                </div>
            </div>
            <div className={style.Mobile}>
                <div className={style.ContainerMobile}>
                    <h2 onClick={(e) => {navigate("/"); closeMenuWithLogo(e)}}>Logo</h2>
                    {console.log(open)}
                    {open ? menuOpen : menuClosed}
                    {open && <Burguer setOpen={setOpen}/> }
                </div>
                
            </div>
            
        </div>
    )
}