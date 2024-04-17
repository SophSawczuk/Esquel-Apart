import { useState } from "react"
import Swal from "sweetalert2"
import style from "../styles/Contact.module.css"
import { FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';


export default function Contact() {

    const [input, setInput] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [errors, setErrors] = useState({})

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(errors.name === "Se requiere un nombre" || errors.name === "El nombre debe tener al menos 4 caracteres" || errors.email === "Se requiere un email" || errors.email === "Ingrese un email válido" || errors.message === "Ingrese un mensaje con más de 50 caracteres") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Faltan completar campos',
            }) 
        } else if(input.name === "" && input.email === "" && input.message === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Faltan completar campos',
            }) 
        }
        else{
            emailjs.sendForm('service_7zvshge', 'template_h6e4l0o', e.target, 'Rc4HvkwJmlJbyGBKL' )
                .then(response => console.log(response))
                .catch(error => console.log(error))

            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Mensaje enviado con éxito',
            })
            setInput({
                name: "",
                email: "",
                message: ""
            })
            
        }
    }

    function validate(input) {
        let errors = []
        if(!input.name) {
            errors.name = "Se requiere un nombre"
        } else if(input.name.length < 4) {
            errors.name = "El nombre debe tener al menos 4 caracteres"
        }

        if(!input.email) {
            errors.email = "Se requiere un email"
        } else if (!input.email.includes("@")) {
            errors.email = "Ingrese un email válido"
        }

        if(input.message.length < 50) {
            errors.message = "Ingrese un mensaje con más de 50 caracteres"
        } 

        return errors
    }





    return(
        <div>
            <h3 className={style.Title}>Contacto</h3>
            <div className={style.WrapperContact}>
                <form onSubmit={e => handleSubmit(e)} className={style.ContactContainer}>
                    <div className={style.Input}>
                        <span>Nombre y apellido</span>
                        
                            <input type="text" id="name" name="name" value={input.name} placeholder="Juan Perez..." onChange={e => handleChange(e)}/>
                            {errors.name && (
                                <p className={style.Errors}>{errors.name}</p>
                            )}
                        
                    </div>
                    <div className={style.Input}>
                        <span>Correo electrónico</span>
                        
                            <input type="email" id="email" name="email"  value={input.email} placeholder="juanperez@gmail.com..." onChange={(e) => handleChange(e)}/>
                            {errors.email && (
                                <p className={style.Errors}>{errors.email}</p>
                            )}
                     
                    </div>
                    <div className={style.Input}>
                        <span>Tu consulta</span>
                        
                            <textarea type="text" id="message" name="message" value={input.message} placeholder="Escribe aquí tu mensaje..." onChange={(e) => handleChange(e)} className={style.MessageInput}/>
                            {errors.message && (
                                <p className={style.Errors}>{errors.message}</p>
                            )}
                   
                    </div>
                    <button type="submit" className={style.SubmitButton}>Enviar</button>
                </form>
                
                <div className={style.WrapperContactInfo}>
                    <div className={style.WrapperIcons}>
                        <div className={style.Block}>
                            <FaWhatsapp className={style.Icon}/>
                            <p>+54 (223) 504-7367</p>
                        </div>
                        <div className={style.Block}>
                            <FaWhatsapp className={style.Icon}/>
                            <p>+54 (223) 504-7367</p>
                        </div>
                        <div className={style.Block}>
                            <FaWhatsapp className={style.Icon}/>
                            <p>+54 (223) 504-7367</p>
                        </div>
                        <div className={style.Block}>
                            <FaWhatsapp className={style.Icon}/>
                            <p>+54 (223) 504-7367</p>
                        </div>
                    </div>
                    <p className={style.Reminder}>Consultanos sobre disponibilidad o cualquier otra consulta que tengas. Recuerda especificar fecha y cantidad de personas.</p>
                </div>
            </div>
            
            
        </div>
    )

    
}