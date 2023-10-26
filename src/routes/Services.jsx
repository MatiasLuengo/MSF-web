import {ContactForm} from "../components/ContactForm"
import imgSecurity from "../assets/seguridad3.jpg"
import iso from "../assets/ISO-9001B.svg"
import iqnet from "../assets/iqNetB.svg"
import ISO_9001_2015 from "../assets/certificado_ISO_9001_2015.pdf"

export const Services = ({  }) => {

    return (
        <>
        <article className="grid lg:grid-cols-2">
            <img className=" rounded-tr-[100px] " src={imgSecurity} alt="" />
            <section className="flex flex-row justify-between">
                <div className="flex flex-col w-96 p-10 text-start">
                    <h3 className="uppercase font-bold text-3xl mx-auto">Certificaciones ISO de calidad</h3>
                    <p className="my-8 mx-auto">En MSF TECH la calidad es nuestra máxima prioridad. Nuestro compromiso con la excelencia se refleja en cada proyecto que emprendemos. Poseemos nuestro sistema de gestión de la calidad certificado bajo la norma ISO 9001:2015.</p>
                    <div className="flex flex-row">
                        <img className="w-24" src={iqnet} alt="Logo de IQNet" />
                        <img className="w-24" src={iso} alt="Logo ISO 9001" />
                    </div>
                    <a className="mt-8 font-semibold text-[#0a457d] hover:scale-105 w-fit" href={ISO_9001_2015} download="certificado_ISO_9001_2015.pdf">Descargar certificado:<br/> ISO 9001 : 2015</a>
                </div>
                <div className="w-[120px] group relative">
                    <div className="w-10 h-10 bg-[#0a457d] rounded-tr-full absolute left-10 border-white border-[1px]"></div>
                    <div className="w-10 h-10 bg-[#0a457d] rounded-tl-full absolute left-10 top-10 border-white border-[1px]"></div>
                    <div className="w-10 h-10 bg-[#0a457d] rounded-bl-full absolute left-10 top-20 border-white border-[1px]"></div>
                    <div className="w-10 h-10 bg-[#0a457d] rounded-tr-full absolute left-20 top-20 border-white border-[1px]"></div>
                    <div className="w-10 h-10 bg-[#0a457d] rounded-bl-full absolute left-20 top-[120px] border-white border-[1px]"></div>
                </div>
            </section>
        </article>
        <ContactForm/>
        </>
    )
}