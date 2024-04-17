import { useNavigate } from "react-router-dom";
import style from "../styles/RoomCard.module.css"
import {AiOutlineCheck} from "react-icons/ai"
import { RxCross1 } from "react-icons/rx";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom"
import React, { useState } from 'react';

export default function RoomCard({id, name, image, image2, image3, price, characteristics}) {

    const [modalOpen, setModalOpen] = useState(false);
    const [gallery, setGallery] = useState(image)
    /* const modal = document.querySelector("#modal"); */ 
    

   /*  let open = (e) => {
        console.log(modal.showModal(e))
        modal.showModal(e)
        
    }

    let close = (e) => {
        modal.close(e)
    } */

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

   
    const moveFoward = () => {
        if (gallery === image ) {
            setGallery(image2)
           
        } else if (gallery === image2) {
            setGallery(image3)
           
        } else {
            setGallery(image)
            
        }
    }

    const moveBack = () => {
        if (gallery === image ) {
            setGallery(image3)
           
        } else if (gallery === image3) {
            setGallery(image2)
           
        } else {
            setGallery(image)
            
        }
    }

  

    return(
        <div>
        <div className={style.ContainerRoomCard} onClick={() => {openModal()}}>
            <div className={style.ImageContainer}>
                <img src={image} className={style.ImageRoomCard}></img>
            </div>
            <div className={style.InfoContainer}>
                <h4>{name}</h4>
                <div className={style.Price}>
                    <h4>${price}</h4> 
                    <p>/noche</p>
                </div>
            </div>
        </div>
        {modalOpen && (
            <div className={style.ModalOverlay} >
                <div className={style.Modal}>
                    <img src={gallery} className={style.ImageModal}/>
                    <MdArrowBackIos className={style.ArrowBack} onClick={() => {moveBack()}}/>
                    <MdArrowForwardIos className={style.ArrowFoward} onClick={() => {moveFoward()}}/>
                    <div className={style.DetailsModal}>
                        <div>
                            <RxCross1 onClick={() => {closeModal()}} className={style.CloseBtn}/>
                            <h3>{name}</h3>
                            <div className={style.ContainerCheckDetail}>
                                <AiOutlineCheck className={style.CheckIcon}/>
                                <p>{characteristics.breakfast}</p>
                            </div>
                            <div className={style.ContainerCheckDetail}>
                                <AiOutlineCheck className={style.CheckIcon}/>
                                <p>{characteristics.detail}</p>
                            </div>
                            <div className={style.ContainerCheckDetail}>
                                <AiOutlineCheck className={style.CheckIcon}/>
                                <p>{characteristics.heating}</p>
                            </div>
                            <div className={style.ContainerCheckDetail}>
                                <AiOutlineCheck className={style.CheckIcon}/>
                                <p>{characteristics.internet}</p>
                            </div>
                            <div className={style.ContainerCheckDetail}>
                                <AiOutlineCheck className={style.CheckIcon}/>
                                <p>{characteristics.sheets}</p>
                            </div>
                        </div>
                        <div className={style.PriceModal}>
                            <h3>${price}</h3>
                            <p>/noche</p>
                        </div>   
                        <button><Link to="/contact" ><b>Consultar disponibilidad</b></Link></button>              
                    </div>
                </div>   
            </div> 
        )}
        </div>
    )
}