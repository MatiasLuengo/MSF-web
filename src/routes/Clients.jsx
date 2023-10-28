import imgObras from "../assets/img_obras.jpg"
import { ClientsContainer } from "../components/ClientsContainer"

export const Clients = ({  }) => {

    return (
        <>
        <section>
            {/* <img className="w-full h-80" src={imgObras} alt="" /> */}
            <div className="relative flex justify-center items-center">
                <img className="w-full max-h-96 overflow-hidden" src={imgObras} alt="Trabajadores unidos" />
                <h2 className="z-20 absolute uppercase mx-5 text-white textBorder text-center text-4xl lg:text-[4rem] lg:leading-[66px] font-bold font-sans">Nuestros clientes</h2>
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25"></div>
            </div>
            <p className="w-1/2 m-auto text-center text-2xl font-normal my-20">Hemos tenido el privilegio de colaborar con una amplia gama de industrias. Nuestro compromiso con la excelencia y la satisfacción del cliente ha llevado a relaciones duraderas con empresas de renombre a nivel nacional e internacional.</p>
            <ClientsContainer/>
        </section>
        </>
    )
}