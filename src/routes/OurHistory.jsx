import producción_industrial from "../assets/producción_industrial.jpg"
import { StaffContainer } from "../components/StaffContainer"
import { Banner } from "../components/Banner"

export const OurHistory = ({  }) => {

    return (
        <>
        <section>
            <Banner img={producción_industrial} alt={"Taller Industrial"} text={"Nuestra Empresa"}/>
            <p className="w-1/2 m-auto text-center text-2xl font-normal my-20">Promovemos la colaboración de todos los miembros de la empresa, valorando sus talentos y experiencias, sumando nuestras fuerzas para ofrecerle la máxima calidad en nuestros productos y servicios. </p>
            <StaffContainer/>
        </section>
        </>
    )
}