import { ServicesList } from "../components/servicesList"
import { ContactForm } from "../components/ContactForm"
import { TrustUs } from "../components/TrustUs"
import img_empresa from "../assets/img_empresa.jpg"

function Home() {

  return (
    <>
      <div className="relative flex justify-center items-center">
        <img className="w-full max-h-[29rem] overflow-hidden" src={img_empresa} alt="Trabajadores unidos" />
        <h2 className="absolute z-10 uppercase mx-5 text-white textBorder text-center text-4xl lg:text-[4rem] lg:leading-[66px] font-bold font-sans">Inovación en soluciones industriales</h2>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25"></div>
      </div>
      <p className="w-8/12 m-auto text-center text-2xl font-normal my-20">Somos una empresa de ingeniería que desarrolla proyectos llave en mano a sectores como el <span className=" font-semibold">nuclear, ferroviario, agrario, entre otras industrias.</span><br/><br/>
      Brindamos soluciones técnicamente avanzadas que responden a los requerimientos del cliente.<br/><br/>
      Nos dedicamos al diseño, fabricación, mantenimiento y asistencia técnica de ingeniería sobre procesos, máquinas especiales, dispositivos, piezas, equipos y matrices.
      </p>
      <h2 className="uppercase text-center text-4xl font-bold mb-20 mt-28">Conoce nuestros servicios</h2>
      <ServicesList/>
      <TrustUs/>
      <ContactForm/>
    </>
  )
}

export default Home
