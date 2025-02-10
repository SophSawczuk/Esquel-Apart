import casa from "../images/casa-vista-exterior.jpg"
import style from "../styles/Casa.module.css"
import { AiOutlineCheck } from "react-icons/ai"
import { RxCross1 } from "react-icons/rx";
import { useState } from "react"

import WuBookWidget from "../assets/WuBook.jsx";
import ReceptionWidget from "../assets/WuBook.jsx";

/*------ Imagenes ------*/
import image1 from "../images/casa-baño.jpg"
import image2 from "../images/casa-cocina-y-comedor.jpg"
import image3 from "../images/casa-cocina.jpg"
import image4 from "../images/casa-living-comedor.jpg"
import image5 from "../images/casa-vista-exterior.jpg"
import image6 from "../images/casa-vista-nocturna.jpg"
import image7 from "../images/desayuno.jpg"
import image8 from "../images/vista-esquel.jpg"
/*------ Imagenes ------*/

export default function Casa(){

    const [modalOpen, setModalOpen] = useState(false);
    const [pic, setPic] = useState()
    
    const openModal = (picture) => {
        setPic(picture)
        setModalOpen(true);   
    };
    
    const closeModal = () => {
        setModalOpen(false);
    };


    return(
        <div>
            <div className={style.Wrapper}>
                <div className={style.TextContainer}>
                    <img src={casa} className={style.Image}/>
                    <h1 className={style.Title}>CASA</h1>
                    <div className={style.Items}>
                        <div className={style.Item}>
                            <AiOutlineCheck className={style.Icon}/>
                            <p>Dos habitaciones con colchones y somieres de máximo confort.</p>
                        </div>
                        <div className={style.Item}>
                            <AiOutlineCheck/>
                            <p>Wi-Fi de alta velocidad disponible..</p>
                        </div>
                        <div className={style.Item}>
                            <AiOutlineCheck/>
                            <p>20 canales de TV HD con TDA (Televisión Digital Abierta).</p>
                        </div>
                        <div className={style.Item}>
                            <AiOutlineCheck/>
                            <p>Opción de Direct TV (prepago optativo).</p>
                        </div>
                        <div className={style.Item}>
                            <AiOutlineCheck/>
                            <p>Seguridad reforzada con alarma y caja de seguridad..</p>
                        </div>
                        <div className={style.Item}>
                            <AiOutlineCheck/>
                            <p>Cochera exclusiva para 1 o 2 vehículos.</p>
                        </div>
                        <div className={style.Item}>
                            <AiOutlineCheck/>
                            <p>Parrilla exterior para reuniones al aire libre.</p>
                        </div>
                        <div className={style.Item}>
                            <AiOutlineCheck/>
                            <p>Hermoso y exclusivo jardín.</p>
                        </div>
                    </div>
                </div>
                <div className={style.Paragraph}>
                    <p>Con capacidad para alojar hasta 6 huéspedes, se encuentra ubicada en el pintoresco faldeo de la montaña y a sólo 7 cuadras del centro de Esquel, está completamente equipada para su comodidad.</p>
                    <br/>
                    <p>Cuenta con dos habitaciones, donde encontrará colchones y somieres de máximo confort para garantizar un descanso reparador.                    </p>
                    <br/>
                    <p>Además, posee un amplio estar-comedor para relajarse y disfrutar de momentos inolvidables contemplando el fueguito de leñero para el cual le proveemos leña durante toda su estadía.</p>
                    <br/>
                    <p>La calefacción por losa radiante, garantiza la buena temperatura durante toda su estadía. Cuenta con Wi-Fi de alta velocidad, 20 canales de TV HD con TDA (Televisión Digital Abierta) y la opción de Direct TV (prepago optativo).                    </p>
                    <br/>
                    <p>Con seguridad reforzada por alarma y caja de seguridad, así como una cochera exclusiva para 1 o 2 vehículos, cada detalle ha sido pensado para su tranquilidad.</p>
                    <br/>
                    <p>La unidad cuenta también con parrilla exterior para sus reuniones al aire libre y un hermoso y exclusivo jardín.</p>
                </div>
            </div>
            <div className={style.SecondBlock}>
                <img src={image1} className={style.Foto} onClick={() => {openModal(image1)}}/>
                <img src={image2} className={style.Foto} onClick={() => {openModal(image2)}}/>
                <img src={image3} className={style.Foto} onClick={() => {openModal(image3)}}/>
                <img src={image4} className={style.Foto} onClick={() => {openModal(image4)}}/>
                <img src={image5} className={style.Foto} onClick={() => {openModal(image5)}}/>
                <img src={image6} className={style.Foto} onClick={() => {openModal(image6)}}/>
                <img src={image7} className={style.Foto} onClick={() => {openModal(image7)}}/>
                <img src={image8} className={style.Foto} onClick={() => {openModal(image8)}}/>
            </div>
            <div className={style.ThirdBlock}>
            <div className="kas_online_reception" src="https://wubook.net/nneb/bk?f=today&n=1&ep=93a48372&o=1.0.0.0"></div>
            <ReceptionWidget/>
            </div>
            {modalOpen && (
                                        <div className={style.ModalOverlay}>
                                            <RxCross1 onClick={() => {closeModal()}} className={style.CloseModalBtn}/>
                                            <img src={pic}/>
                                            
                                        </div>
                                    )}
        </div>
    )
}