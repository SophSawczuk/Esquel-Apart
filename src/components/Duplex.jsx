import duplex from "../images/Duplex.jpg"
import style from "../styles/Duplex.module.css"
import { AiOutlineCheck } from "react-icons/ai"
import { RxCross1 } from "react-icons/rx";
import { useState } from "react"
import WuBook from "../assets/WuBook"  /* <--- motor de reservas */

/*------ Imagenes ------*/
import image1 from "../images/duplex-exterior.jpg"
import image2 from "../images/duplex-baño.jpg"
import image3 from "../images/duplex-dormitorio.jpg"
import image4 from "../images/duplex-nevado.jpg"
import image5 from "../images/vista-invierno.jpg"
import image6 from "../images/duplex-dormitorio-2.jpg"
import image7 from "../images/duplex-dormitorio-3.jpg"

/*------ Imagenes ------*/

export default function Duplex(){

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
                    <img src={duplex} className={style.Image}/>
                    <h1 className={style.Title}>DUPLEX</h1>
                    <div className={style.Items}>
                        <div className={style.Item}>
                            <AiOutlineCheck className={style.Icon}/>
                            <p>Equipamiento completo de cocina, incluyendo vajilla y electrodomésticos de alta gama.</p>
                        </div>
                        <div className={style.Item}>
                            <AiOutlineCheck/>
                            <p>Dos dormitorios, uno de ellos con puerta balcón y salida independiente.</p>
                        </div>
                        <div className={style.Item}>
                            <AiOutlineCheck/>
                            <p>Colchones y somieres de máxima calidad para un descanso óptimo.</p>
                        </div>
                        <div className={style.Item}>
                            <AiOutlineCheck/>
                            <p>Opción de Direct TV (prepago optativo) para entretenimiento adicional.</p>
                        </div>
                        <div className={style.Item}>
                            <AiOutlineCheck/>
                            <p>Cochera semicubierta y exclusiva para cada unidad.</p>
                        </div>
                        <div className={style.Item}>
                            <AiOutlineCheck/>
                            <p>Seguridad proporcionada por alarmas y cajas de seguridad.</p>
                        </div>
                        <div className={style.Item}>
                            <AiOutlineCheck/>
                            <p>Calefacción por loza radiante para mantener una temperatura agradable.</p>
                        </div>
                        <div className={style.Item}>
                            <AiOutlineCheck/>
                            <p>Televisión HD con 20 canales TDA en el estar y dormitorio principal.</p>
                        </div>
                        <div className={style.Item}>
                            <AiOutlineCheck/>
                            <p>Conexión Wi-Fi de alta velocidad.</p>
                        </div>
                    </div>
                </div>
                <div className={style.Paragraph}>
                    <p>Ubicados en el encantador entorno montañoso, a solo 7 cuadras del centro de Esquel, nuestros dúplex ofrecen alojamiento para <b>hasta 4 personas.</b></p>
                    <br/>
                    <p>Equipados con electrodomésticos de primera calidad y vajilla completa, cada unidad cuenta con dos dormitorios, uno de ellos con salida al balcón para disfrutar de las vistas.</p>
                    <br/>
                    <p>Además, el acogedor espacio de estar y comedor es perfecto para relajarse y crear recuerdos inolvidables.</p>
                    <br/>
                    <p>Con seguridad garantizada por alarmas y cajas fuertes, así como estacionamiento exclusivo, su estadía será cómoda y segura.</p>
                    <br/>
                    <p>La calefacción por losa radiante asegura un ambiente cálido, mientras que las opciones de entretenimiento incluyen televisión HD y Wi-Fi de alta velocidad.</p>
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
                <img src={duplex} className={style.Foto} onClick={() => {openModal(duplex)}}/>
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