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
                    style={{"color": "white", paddingRight: "5vw", "width": "1.5em", "height":"1.5em", marginTop: "3vh"}}
                    onClick={() => setOpen(!open)}
                />
    const menuOpen = 
            <div>
              <AiOutlineMenu
                style={{"color": "white", paddingRight: "5vw", "width": "1.5em", "height":"1.5em", "alignSelf":"center", marginTop: "3vh"}}
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
                <ol className={style.List}>
                    <Link to="/rooms"><li>Habitaciones</li></Link>
                    <Link to="/amenities"><li>Comodidades</li></Link>
                    <Link to="/location"><li>Cómo llegar</li></Link>
                    <Link to="/contact"><li>Contacto</li></Link>
                </ol>
            </div>
            <div className={style.Mobile}>
                <div className={style.ContainerMobile}>
                    <div className={style.LogosWrapper}>
                        <h2 onClick={(e) => {navigate("/"); closeMenuWithLogo(e)}}>Logo</h2>
                        {open ? menuOpen : menuClosed}
                    </div>
                    {open && <Burguer setOpen={setOpen}/> }
                </div>
                
            </div>
            
        </div>
    )
}