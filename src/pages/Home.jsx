import { useEffect, useRef } from "react"
import Typed from "typed.js"
import Confetti from "https://esm.run/canvas-confetti@1"
import "../styles/btn-conffeti.css"

export const Home = () => {
    const textRef = useRef(null)

    const clickConffeti = () => {
        Confetti({
            particleCount: 35,
            spread: 150,
            scalar: 0.9,
            decay: 0.7,
            ticks: 60,
            origin: {
                x: 0.5,
                y: 0.7
            }
        })
    }

    useEffect(() => {
        new Typed(textRef.current, {
            strings: [
                'Ing. de Sistemas e Informática.',
                'Movil Developer.',
                'Web Developer.',
                'Fullstack Developer.'
            ],
            typeSpeed: 130,
            backDelay: 300,
            smartBackspace: true,
            loop: true
        })
    }, [])

    return (
        <section className="hero d-flex flex-column justify-content-center align-items-center text-center vh-100 px-5">
            <h5>Hola👋, mi nombre es</h5>
            <h1 className="name-aurora">Jesus Piscoya</h1>
            <h4 className="my-3 pb-4">
                Soy <span ref={textRef} />
            </h4>
            <a id="button-cv" href={"http://bit.ly/jesuspiscoyacv"} download="CV-JESUS-PISCOYA-BANCES.pdf" onClick={clickConffeti}>
                <i className="fa-solid fa-circle-down fa-lg"></i>Descargar CV
            </a>
            <div className="social-links mt-4 pt-3">
                <a href="https://www.linkedin.com/in/jesuspiscoya/" target="_blank">
                    <i className="fa-brands fa-linkedin fa-lg"></i>
                </a>
                <a href="https://github.com/jesuspiscoya" target="_blank">
                    <i className="fa-brands fa-github fa-lg"></i>
                </a>
                <a href="https://wa.me/51921104614" target="_blank">
                    <i className="fa-brands fa-whatsapp fa-lg"></i>
                </a>
                <a href="mailto:jesuspiscoya0351@gmail.com">
                    <i className="fa-solid fa-envelope fa-lg"></i>
                </a>
            </div>
        </section>
    )
}
