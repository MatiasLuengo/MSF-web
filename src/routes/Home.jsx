import { ServicesList } from "../components/servicesList"
import { ContactForm } from "../components/ContactForm"
import { TrustUs } from "../components/TrustUs"

function Home() {

  return (
    <>
      <h2 className="uppercase text-center text-4xl font-bold mb-20 mt-28">Conoce nuestros servicios</h2>
      <ServicesList/>
      <TrustUs/>
      <ContactForm/>
    </>
  )
}

export default Home
