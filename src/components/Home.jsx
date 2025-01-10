import style from "../styles/Home.module.css"
import {AiOutlineCheck} from "react-icons/ai"
import homeImg from "../images/Home.jpg"
import { Link } from "react-router-dom"
import homeImg2 from "../images/Home2.jpg"
import ComodidadesHome from "../assets/ComodidadesHome.jsx"
/* import foto1 from "../images/Foto1.jpg"
import foto2 from "../images/Foto2.jpg"
import foto3 from "../images/Foto3.jpg" */
import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { useEffect } from "react"
import Rooms from "./Rooms.jsx"
import Contact from "./Contact.jsx"
import Loft from "../images/loft.jpg"
import Duplex from "../images/Duplex.png"
import BookingWidget from "../assets/WuBook.jsx"

/* -------- Imágenes ---------- */
import galeria1 from "../images/desayuno.jpg"
import galeria2 from "../images/duplex-dormitorio.jpg"
import galeria3 from "../images/vista-esquel.jpg"
import galeria4 from "../images/Duplex.jpg"
import galeria5 from "../images/acceso-principal.jpg"
import galeria6 from "../images/casa-living-comedor.jpg"
import galeria7 from "../images/vista-invierno.jpg"
import galeria8 from "../images/duplex-area.jpg"
import galeria10 from "../images/vinito.jpg"
import galeria11 from "../images/duplex-nevado.jpg"
import galeria12 from "../images/matecito.jpg"

/* ---------------------------- */

export default function Home() {
    const [modalOpen, setModalOpen] = useState(false);
    const [pic, setPic] = useState()
    const [isPreloaded, setIsPreloaded] = useState(false);

    const openModal = (picture) => {
        setPic(picture)
        setModalOpen(true);

    };

    const closeModal = () => {
        setModalOpen(false);
    };
    useEffect(() => {
        // Monta habitaciones de forma invisible para precargar imágenes
        setIsPreloaded(true);
    }, []);

   

    return(
        <div className={style.Container}>
            <div className={style.BlockOne}>
            <div className={style.Content}>
                <h1 className={style.LightFont}>¡Bienvenido a  <b>ESQUEL APART!</b></h1>
                <p className={style.Subtitle}>Unidades habitacionales en Esquel, Chubut, Argentina</p>
                <div className={style.ContainerList}>
                    <p>Descubrí nuestras opciones únicas de alojamiento:</p>
                    <br/>
                     <div className={style.Checklist} >
                        <AiOutlineCheck className={style.CheckIcon} />
                        <p><b>7 loft </b> que ofrecen una experiencia moderna, confortable y luminosa, con un diseño contemporáneo que combina perfectamente el estilo y la funcionalidad.</p>
                    </div>
                    <br/>
                    <div className={style.Checklist}>
                        <AiOutlineCheck className={style.CheckIcon}/>
                        <p><b>4 dúplex</b> con su distribución inteligente del espacio, ofrecen no sólo privacidad, sino también impresionantes vistas panorámicas que complementarán su estancia.</p>
                    </div>
                    <br/>
                    <div className={style.Checklist}>
                        <AiOutlineCheck className={style.CheckIcon}/>
                        <p><b>1 casa</b> ubicada estratégicamente, ofrece vistas espectaculares que harán de tu estancia una experiencia verdaderamente inolvidable.</p>
                    </div>
                    {/*<div className={style.Checklist}>
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
                    </div> */}
                    {/* <div className={style.Checklist}>
                        <p>Descubra la comodidad y confort de nuestras 12 unidades habitacionales, que incluyen 7 Loft, 4 Duplex y 1 Casa.</p>
                        <p>Los <b className={style.FontColor}>Loft</b> ofrecen una experiencia moderna, confortable y luminosa, con un diseño contemporáneo que combina perfectamente el estilo y la funcionalidad.</p>
                        <p>Nuestros Duplex, con su distribución inteligente del espacio, ofrecen no sólo privacidad, sino también impresionantes vistas panorámicas que complementarán su estancia.</p>
                        <p>Y nuestra Casa, ubicada estratégicamente, ofrece vistas espectaculares que harán de tu estancia una experiencia verdaderamente inolvidable. En Esquel Apart, cada unidad ha sido cuidadosamente diseñada para satisfacer sus necesidades, ya sea que nos visite por negocios o placer.</p>
                        <p>Disfrute de la tranquilidad y la privacidad de su propio espacio, combinado con servicios de alta calidad y una atención personalizada que hará que su estancia sea excepcional.</p>
                    </div> */}
                </div>
                <div className={style.ButtonAvailability}>
                    <button><Link to="/hospedaje" ><h5>Ver opciones de hospedaje</h5></Link></button>
                </div>
            </div>
            <div >
                <img src={Loft} alt="Vista de la laguna La Zeta, Esquel." className={style.Image}/>
            </div>
            

            </div>

            <div className={style.SecondBlock}>
                <img src={Duplex} alt="Vista de la laguna La Zeta, Esquel." className={style.ImageTwo}/>
                <h2>¿Por qué elegirnos?</h2>
                <ComodidadesHome/>
                <button className={style.ComodidadesButton}><Link to="/hospedaje"><h5>Ver opciones de hospedaje</h5></Link></button>
            </div>

            <div className={style.ThirdBlock}>
                <h2>Fotos</h2>
                <div className={style.Fotos}>
                    <div className={style.Columna1}>
                        <img src={galeria1} onClick={() => {openModal(galeria1)}}/>
                        <img src={galeria2} onClick={() => {openModal(galeria2)}}/>
                    </div>
                    <div className={style.Columna2}>
                        <img src={galeria3} onClick={() => {openModal(galeria3)}}/>
                    </div>
                </div>
                <div className={style.Fotos}>
                    <div className={style.Columna1Reves}>
                        <img src={galeria4} onClick={() => {openModal(galeria4)}}/>
                    </div>
                    <div className={style.Columna2Reves}>
                        <img src={galeria5} onClick={() => {openModal(galeria5)}}/>
                        <img src={galeria6} onClick={() => {openModal(galeria6)}}/>
                    </div>
                </div>
                <div className={style.Fotos}>
                    <div className={style.Columna1}>
                        <img src={galeria7} onClick={() => {openModal(galeria7)}}/>
                        <img src={galeria8} onClick={() => {openModal(galeria8)}}/>
                    </div>
                    <div className={style.Columna2}>
                        <img src={Loft} onClick={() => {openModal(Loft)}}/>
                    </div>
                </div>
                <div className={style.Fotos}>
                    <div className={style.Columna1Reves}>
                        <img src={galeria10} onClick={() => {openModal(galeria10)}}/>
                    </div>
                    <div className={style.Columna2Reves}>
                        <img src={galeria11} onClick={() => {openModal(galeria11)}}/>
                        <img src={galeria12} onClick={() => {openModal(galeria12)}}/>
                    </div>
                </div>
                
            </div>
            {modalOpen && (
                <div className={style.ModalOverlay}>
                    <RxCross1 onClick={() => {closeModal()}} className={style.CloseModalBtn}/>
                    <img src={pic}/>
                    
                </div>
            )}
            {isPreloaded && <div style={{ display: 'none' }}><Rooms /> <Contact/></div>}
        </div>
    )
}