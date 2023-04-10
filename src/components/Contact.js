import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPaperPlane,faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import cv from "../assets/cv";
import { useState } from "react";

const Contact = () => {
    
    const [contactFormMessage, setContactFormMessage] = useState("");
    
    const handleSubmit = (event) => 
    {
        event.preventDefault();
        const scriptURL = "https://script.google.com/macros/s/AKfycbwAMKto2OtQ_XiFpNVmOSxN7eO1hhiFLQAUX44mdeLAJ-PkuVrPy09Lle0_Kgd22xTY/exec";
        const form = event.target;

        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                setContactFormMessage("Message successfully send.");
                setTimeout(function(){
                    setContactFormMessage("");
                }, 5000);
                form.reset();
            })
            .catch(error => {
                console.error(error);
            });
    }
    
    return (
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p><FontAwesomeIcon icon={faPaperPlane} className="icon" />dietherfiel@gmail.com</p>
                        <p><FontAwesomeIcon icon={faPhoneSquareAlt} className="icon" />09392089105</p>
                        <div className="social-icons">
                            <a href="http://www.facebook.com/terfimacel" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
                            </a>
                            <a href="https://www.instagram.com/terciel22/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faInstagramSquare} className="icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/diether-mark-fiel-b90370237/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="icon" />
                            </a>
                            <a href="https://t.me/terciel22" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faTelegram} className="icon" />
                            </a>
                        </div>
                        <a href={cv} download className="btn">Download CV</a>
                    </div>
                    <div className="contact-right">
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Name"/>
                            <input type="email" name="email" placeholder="Email"/>
                            <textarea rows={6} name="message" placeholder="Message"></textarea>
                            <button type="submit" className="btn">Submit</button>
                        </form>
                        <span id="contact-form-msg">{contactFormMessage}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact