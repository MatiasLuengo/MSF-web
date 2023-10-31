import imgObras from "../assets/seguridad.png"
import { Banner } from "../components/Banner"
import { ContactForm } from "../components/ContactForm"

export const WorkWithUs = ({  }) => {

    return (
        <>
        <section>
            <Banner img={imgObras} alt={"Taller Industrial"} text={"Trabaja con nosotros"}/>
            <p className="w-1/2 m-auto text-center text-2xl font-normal my-20">Si querés formar parte de nuestro equipo dejanos tus datos. </p>
        </section>
        <ContactForm/>
        </>
    )
}