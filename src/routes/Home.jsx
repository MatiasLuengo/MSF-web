import { ServicesList } from "../components/ServicesList"
import { ContactForm } from "../components/ContactForm"
import { TrustUs } from "../components/TrustUs"
import img_empresa from "../assets/fachada.jpg"
import { Banner } from "../components/Banner"

function Home() {
  
  return (
    <>
      <Banner img={img_empresa} alt={"Taller Industrial"} text={"Innovación en soluciones industriales"}/>
      <p className="w-8/12 m-auto text-center  text-2xl my-20">Somos una empresa de ingeniería que ofrece soluciones integrales a través de proyectos llave en mano a sectores como <span className="font-black">el nuclear, agrario, ferroviario, entre otras industrias.</span><br/><br/>
      Nos dedicamos al diseño, fabricación, mantenimiento y asistencia técnica de ingeniería sobre procesos, máquinas especiales, dispositivos, piezas, equipos y matrices.<br/><br/>
      Cumplimos con los estándares más exigentes de la industria y nos esforzamos constantemente por superar las expectativas.
      </p>
      <h2 className="uppercase text-center text-4xl font-bold mb-20 mt-28">Conoce nuestros servicios</h2>
      <ServicesList/>
      <TrustUs/>
      <ContactForm/>
    </>
  )
}

export default Home
