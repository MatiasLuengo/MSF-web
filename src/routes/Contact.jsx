import { ContactForm } from "../components/ContactForm"
import imgContact from "../assets/front.jpg"
import { Banner } from "../components/Banner"

export const Contact = ({  }) => {

    return (
        <>
        <Banner img={imgContact} alt={"Empleados Trabajando"} text={"Juntos potenciamos el crecimiento"}/>
        <h2 className="uppercase text-center text-4xl font-bold mb-20 mt-28">Seguinos en las redes</h2>
        <div className="flex flex-row justify-evenly items-center text-[76px] uppercase mt-5 mb-28 w-10/12 mx-auto">
            <a className="hover:scale-105 text-[#3b5998]" href="https://www.facebook.com/msftechsa" target="_blank" rel="noreferrer noopener" aria-label="Ir a Facebook">
                <i className='bx bxl-facebook-square' ></i>
            </a>
            <a className="hover:scale-105 text-[#d12f70]" href="https://www.instagram.com/msftechsa" target="_blank" rel="noreferrer noopener" aria-label="Ir a Instagram">
                <i className='bx bxl-instagram' ></i>
            </a>
            <a className="hover:scale-105 text-[#0e76a8]" href="https://www.linkedin.com/feed/update/urn:li:activity:7120039199910617089" target="_blank" rel="noreferrer noopener" aria-label="Ir a Linkedin">
                <i className='bx bxl-linkedin-square' ></i>
            </a>
        </div>
        <iframe className=" max-xs:w-10/12 m-auto w-full sm:h-80" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13617.013068109176!2d-62.1213569!3d-31.4346938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cb282ffcdd8a35%3A0x16e70c1228aa22f9!2sMSF%20TECH%20SA!5e0!3m2!1sen!2sar!4v1698281007022!5m2!1sen!2sar"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <p className="w-1/2 mx-auto text-center text-2xl mt-28">Si querés formar parte de nuestro equipo dejanos tus datos. </p>
        <ContactForm/>
        </>
    )
}