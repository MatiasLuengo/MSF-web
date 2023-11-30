import imgObras from "../assets/img_empresa.jpg"
import { ClientsContainer } from "../components/ClientsContainer"
import { Banner } from "../components/Banner"

export const Clients = ({  }) => {

    return (
        <>
        <section>
            <Banner img={imgObras} alt={"Taller Industrial"} text={"Nuestros Clientes"}/>
            <p className="w-1/2 m-auto text-center text-2xl font-normal my-20">Hemos tenido el privilegio de colaborar con una amplia gama de industrias. Nuestro compromiso con la excelencia y la satisfacción del cliente ha llevado a relaciones duraderas con empresas de renombre a nivel nacional e internacional.</p>
            <ClientsContainer/>
        </section>
        </>
    )
}