import { ContactForm } from "../components/ContactForm"
import imgContact from "../assets/trabajadores.jpg"

export const Contact = ({  }) => {

    return (
        <>
        <div className="relative flex justify-center items-center">
            <img className="w-full max-h-[29rem] overflow-hidden" src={imgContact} alt="Trabajadores unidos" />
            <h2 className="absolute uppercase mx-5 text-white textBorder text-center text-4xl lg:text-[4rem] lg:leading-[66px] font-bold mb-20 mt-28">Juntos potenciamos el crecimiento</h2>
        </div>
        <h2 className="uppercase text-center text-4xl font-bold mb-20 mt-28">Síguenos en las redes</h2>
        <div className="flex flex-row justify-evenly items-center text-[76px] uppercase mt-5 mb-28">
            <a className="hover:scale-105 text-[#3b5998]" href="https://www.facebook.com/msftechsa" target="_blank">
                <i class='bx bxl-facebook-square' ></i>
            </a>
            <a className="hover:scale-105 text-[#d12f70]" href="https://www.instagram.com/msftechsa" target="_blank">
            <i class='bx bxl-instagram' ></i>
            </a>
            <a className="hover:scale-105 text-[#0e76a8]" href="https://www.linkedin.com/feed/update/urn:li:activity:7120039199910617089" target="_blank">
            <i class='bx bxl-linkedin-square' ></i>
            </a>
        </div>
        <iframe className=" max-xs:w-10/12 m-auto w-full sm:h-80" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13617.013068109176!2d-62.1213569!3d-31.4346938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cb282ffcdd8a35%3A0x16e70c1228aa22f9!2sMSF%20TECH%20SA!5e0!3m2!1sen!2sar!4v1698281007022!5m2!1sen!2sar"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <ContactForm/>
        </>
    )
}