import casa from "../images/casa-vista-exterior.jpg"
import style from "../styles/Casa.module.css"
import { AiOutlineCheck } from "react-icons/ai"
import { RxCross1 } from "react-icons/rx";
import { useState } from "react"
import WuBook from "../assets/WuBook"  /* <--- motor de reservas */

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
                    <p>Nuestros acogedores Departamentos tipo loft son ideales para <b>2 adultos y 2 menores o bien 3 adultos</b> y se encuentran ubicados en la entrada de la encantadora ciudad de Esquel.</p>
                    <br/>
                    <p>En la planta baja, encontrará un amplio espacio con comedor y sala de estar, equipado con TV para relajarse después de un día de aventuras. Además, encontrará una cómoda cama marinera y una cocina completamente equipada con todo lo que necesita para que su estadía sea ideal.</p>
                    <br/>
                    <p>En la planta alta dispondrá de un elegante y acogedor dormitorio, con la opción de una cama matrimonial o dos camas individuales, todas con colchones y somieres de la más alta calidad garantizando el máximo confort. Además, cada loft cuenta con cajas de seguridad individuales para su tranquilidad.</p>
                    <br/>
                    <p>Posee estacionamiento frente a cada departamento y seguridad reforzada con alarma y videocámaras.</p>
                    <br/>
                    <p>Además, tendrá acceso exclusivo a nuestro quincho con parrilla, donde podrá disfrutar de deliciosos asados sin costo adicional, solo con hacer su reserva previa.</p>
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