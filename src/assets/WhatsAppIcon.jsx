import WhatsApp from "../images/whatsapp.png"
import style from "../styles/WhatsAppIcon.module.css"
import { Link } from "react-router-dom"

export default function WhatsAppIcon(){
    return(
        <div>
            <Link to="https://api.whatsapp.com/send?phone=5492945689219" target="_blank" rel="noopener noreferrer"><img src={WhatsApp} className={style.Wapp}/></Link>
    
        </div>
    )
}