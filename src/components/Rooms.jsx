import { rooms } from "./Data"
import RoomCard from "./RoomCard"
import style from "../styles/Rooms.module.css"
import casa from "../images/casa-vista-exterior.jpg"
import loft from "../images/loft.jpg"
import duplex from "../images/Duplex.jpg"
import { Link } from "react-router-dom"


export default function Rooms() {
    return(
        <div>
            <h2 className={style.Title}>Descubre nuestras opciones de hospedaje</h2>
            <div className={style.Container}>
                {/* {
                    rooms && rooms.map(e => {
                        return(
                            <RoomCard key={e.id} id={e.id} image={e.image} image2 ={e.image2} image3={e.image3} name={e.name} price={e.price} characteristics={e.characteristics}/>
                        )
                    })
                } */}
                <Link to="/casa">
                    <div className={style.TextContainer}>
                        <img src={casa} className={style.Image}/> 
                        <p className={style.Text}>CASA</p>
                    </div> 
                </Link>
                <Link to="/loft">
                    <div className={style.TextContainer}>
                        <img src={loft} className={style.Image}/>
                        <p className={style.Text}>LOFT</p>
                    </div>
                </Link>
                <Link to="/duplex">
                    <div className={style.TextContainer}>
                        <img src={duplex} className={style.Image}/>
                        <p className={style.Text}>DUPLEX</p>
                    </div>
               </Link>
                
            </div>
        </div>
    )
}