import { rooms } from "./Data"
import RoomCard from "./RoomCard"
import style from "../styles/Rooms.module.css"


export default function Rooms() {
    return(
        <div>
            <h3 className={style.Title}>Nuestras habitaciones</h3>
            <div className={style.Container}>
                {
                    rooms && rooms.map(e => {
                        return(
                            <RoomCard key={e.id} id={e.id} image={e.image} image2 ={e.image2} image3={e.image3} name={e.name} price={e.price} characteristics={e.characteristics}/>
                        )
                    })
                }
            </div>
        </div>
    )
}