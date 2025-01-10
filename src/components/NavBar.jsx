import style from "../styles/NavBar.module.css"
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai"
import { useState } from "react";
import Burguer from "../assets/Burguer";
import { useNavigate } from "react-router-dom";
/* import Logo from "../images/Logo.png" */
/* import Logo from "../images/esquel-apart-logo-2.jpg" */
import Logo from "../images/otro-logo.png"

export default function NavBar() {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();

    const menuClosed = <AiOutlineMenu
                    style={{"color": "white", paddingRight: "5vw", "width": "20px", "height":"20px", marginTop: "3vh", paddingLeft: "90vw"}}
                    onClick={() => setOpen(!open)}
                />
    const menuOpen = 
            <div>
              <AiOutlineMenu
                style={{"color": "white", paddingRight: "5vw", "width": "1.2em", "height":"1.2em", "alignSelf":"center", marginTop: "3vh", paddingLeft: "90vw"}}
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
                <Link to="/"><img src={Logo} className={style.Logo}/></Link>
                <ol className={style.List}>
                    <Link to="/"><li>Inicio</li></Link>
                    <Link to="/hospedaje"><li>Hospedaje</li></Link>
                    <Link to="/actividades"><li>¿Qué hacer en Esquel?</li></Link>
                    <Link to="/ubicacion"><li>Ubicación</li></Link>
                    <Link to="/contacto"><li>Contacto</li></Link>
                </ol>
            </div>
            <div className={style.Mobile}>
                <div className={style.ContainerMobile}>
                    <div className={style.LogosWrapper}>
                        <img src={Logo} onClick={(e) => {navigate("/"); closeMenuWithLogo(e)}} className={style.Logo}/>
                        {open ? menuOpen : menuClosed}
                    </div>
                    {open && <Burguer setOpen={setOpen}/> }
                </div>
                
            </div>
            
        </div>
    )
}