import style from "../styles/Home.module.css"
import {AiOutlineCheck} from "react-icons/ai"
import homeImg from "../images/Home.jpg"
import { Link } from "react-router-dom"
import homeImg2 from "../images/Home2.jpg"
import ComodidadesHome from "../assets/ComodidadesHome.jsx"
import foto1 from "../images/Foto1.jpg"
import foto2 from "../images/Foto2.jpg"
import foto3 from "../images/Foto3.jpg"
import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";

export default function Home() {
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
        <div className={style.Container}>
            <div className={style.BlockOne}>
            <div className={style.Content}>
                <h1 className={style.LightFont}>Disfrute sus vacaciones en <b>HOTEL PRUEBA</b></h1>
                <p className={style.Subtitle}>Hotel ubicado en Esquel, Chubut, Argentina</p>
                <div className={style.ContainerList}>
                    <div className={style.Checklist}>
                        <AiOutlineCheck className={style.CheckIcon}/>
                        <p>Excelente ubicación</p>
                    </div>
                    <div className={style.Checklist}>
                        <AiOutlineCheck className={style.CheckIcon}/>
                        <p>Wifi libre y gratuito</p>
                    </div>
                    <div className={style.Checklist}>
                        <AiOutlineCheck className={style.CheckIcon}/>
                        <p>Servicio de sábanas</p>
                    </div>
                    <div className={style.Checklist}>
                        <AiOutlineCheck className={style.CheckIcon}/>
                        <p>Desayuno incluido</p>
                    </div>
                    <div className={style.Checklist}>
                        <AiOutlineCheck className={style.CheckIcon}/>
                        <p>Calefacción</p>
                    </div>
                    <div className={style.Checklist}>
                        <AiOutlineCheck className={style.CheckIcon}/>
                        <p>Aire acondicionado</p>
                    </div>
                </div>
                <div className={style.ButtonAvailability}>
                    <button><Link to="/contact" ><h5>Consultar disponibilidad</h5></Link></button>
                </div>
            </div>
            <div >
                <img src={homeImg} alt="Vista de la laguna La Zeta, Esquel." className={style.Image}/>
            </div>
            </div>

            <div className={style.SecondBlock}>
                <img src={homeImg2} alt="Vista de la laguna La Zeta, Esquel." className={style.ImageTwo}/>
                <h2>Algunas de nuestras comodidades</h2>
                <ComodidadesHome/>
                <button className={style.ComodidadesButton}><Link to="/amenities"><h5>Ver todas</h5></Link></button>
            </div>

            <div className={style.ThirdBlock}>
                <h2>Fotos</h2>
                <div className={style.Fotos}>
                    <div className={style.Columna1}>
                        <img src={foto2} onClick={() => {openModal(foto2)}}/>
                        <img src={foto3} onClick={() => {openModal(foto3)}}/>
                    </div>
                    <div className={style.Columna2}>
                        <img src={foto1} onClick={() => {openModal(foto1)}}/>
                    </div>
                </div>
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