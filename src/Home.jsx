import { ServicesList } from "./components/servicesList"
import { Form } from "./components/Form"

function Home() {

  return (
    <>
      <h2 className="uppercase text-center text-4xl font-bold mb-20 mt-28">Conoce nuestros servicios</h2>
      <ServicesList/>
      <h2 className="uppercase text-center text-4xl font-bold mb-20 mt-28">Confían en nosotros</h2>
      <Form/>
    </>
  )
}

export default Home
