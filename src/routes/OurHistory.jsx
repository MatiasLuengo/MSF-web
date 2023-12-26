import producción_industrial from "../assets/producción_industrial2.jpg"
import img_obras from "../assets/prueba.jpg"
import { Banner2 } from "../components/Banner2"
import imgSecurity from "../assets/seguridad3.jpg"
import iso from "../assets/ISO-9001B.svg"
import iqnet from "../assets/iqNetB.svg"
import ISO_9001_2015 from "../assets/certificado_ISO_9001_2015.pdf"

export const OurHistory = ({  }) => {

    return (
        <>
        <section>
            <Banner2 img2={img_obras} img={producción_industrial} alt={"Taller Industrial"} text={"Nuestra Empresa"}/>
            <p className="w-2/3 mx-auto text-center text-2xl my-28">El 20 de agosto de 2010 nace MSF TECH S.A. Desde sus inicios la empresa tiene como su objetivo principal brindar soluciones técnicamente avanzadas que respondan a los requerimientos del cliente.<br/><br/>
            Un hito fundamental es haber sido contratada en el año 2011 por INVAP S.E., para el desarrollo de proyectos ejecutivos pertenecientes al “Sistema de tratamiento de residuos no combustibles de la Central Nuclear Atucha II” con la fabricación del equipamiento y los sistemas de control individual y agrupados bajo un entorno SCADA –Win CC (Siemens.)</p>
            <article className="xlg:flex mb-10">
                <img loading="lazy" className="rounded-tr-[100px] xlg:w-1/2 max-xlg:rounded-[0px] max-xlg:mx-auto" src={imgSecurity} alt="" />
                <section className="flex flex-row justify-between w-2/3 mx-auto xlg:w-1/2">
                    <div className="flex flex-col w-[350px] text-start py-10 pl-0 xlg:pl-10 pr-0">
                        <h3 className="uppercase font-bold text-3xl ml-0">Calidad y Compromiso</h3>
                        <p className="my-8 mx-auto text-lg">En MSF TECH la calidad es nuestra máxima prioridad. Nuestro compromiso con la excelencia se refleja en cada proyecto que emprendemos. Poseemos nuestro sistema de gestión de la calidad certificado bajo la norma ISO 9001:2015.</p>
                        <div className="flex flex-row">
                            <img className="w-24" src={iqnet} loading="lazy" alt="Logo de IQNet" />
                            <img className="w-24" src={iso} loading="lazy" alt="Logo ISO 9001" />
                        </div>
                        <a className="mt-8 font-semibold text-[#0a457d] hover:scale-105 w-fit" href={ISO_9001_2015} download="certificado_ISO_9001_2015.pdf">Descargar certificado:<br/> ISO 9001 : 2015</a>
                    </div>
                    <div className="w-[120px] group relative hidden xxs:block">
                        <div className="w-10 h-10 bg-[#0a457d] rounded-tr-full absolute left-10 border-white border-[1px] group-hover:translate-x-10 group-hover:translate-y-10 duration-300"></div>
                        <div className="w-10 h-10 bg-[#0a457d] rounded-tl-full absolute left-10 top-10 border-white border-[1px] group-hover:translate-x-10 group-hover:-translate-y-10 duration-300"></div>
                        <div className="w-10 h-10 bg-[#0a457d] rounded-bl-full absolute left-10 top-20 border-white border-[1px] group-hover:rotate-90 duration-300"></div>
                        <div className="w-10 h-10 bg-[#0a457d] rounded-tr-full absolute left-20 top-20 border-white border-[1px] group-hover:rotate-90 group-hover:-translate-x-10 group-hover:translate-y-10 duration-300"></div>
                        <div className="w-10 h-10 bg-[#0a457d] rounded-bl-full absolute left-20 top-[120px] border-white border-[1px] group-hover:rotate-90 group-hover:-translate-x-20 duration-300"></div>
                    </div>
                </section>
            </article>
        </section>
        </>
    )
}