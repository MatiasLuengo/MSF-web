import { ServicesList } from "./components/servicesList"
import { ContactForm } from "./components/ContactForm"

function Home() {

  return (
    <>
      <h2 className="uppercase text-center text-4xl font-bold mb-20 mt-28">Conoce nuestros servicios</h2>
      <ServicesList/>
      <h2 className="uppercase text-center text-4xl font-bold mb-20 mt-28">Confían en nosotros</h2>
      <ContactForm/>
    </>
  )
}

export default Home
