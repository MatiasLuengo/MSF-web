import imgForm from "../assets/trabajador.png"

export const ContactForm = ({  }) => {
    return (
        <>
        <h2 className="text-center text-[50px] font-bold mb-20 mt-28 text-[#2e4474] font-rubik">Contactanos</h2>
        <div className="relative">

        
        <div className="bg-white w-10/12 m-auto rounded-3xl border-[1px] border-black grid lg:grid-cols-2 z-20 shadow-lg">
            <form className=" w-10/12 m-auto rounded-3xl flex flex-col py-10" action="https://formsubmit.co/matiasluengoo95@gmail.com" method="POST">
                    <label className="text-sm mb-2" htmlFor="Nombre">Nombre y Apellido</label>
                    <input className="border-[1px] border-black rounded-md h-8 mb-4" type="text" name="Nombre" required />
                    <label className="text-sm mb-2" htmlFor="Teléfono">Teléfono</label>
                    <input className="border-[1px] border-black rounded-md h-8 mb-4" type="text" name="Teléfono"  required />
                    <label className="text-sm mb-2" htmlFor="Email">Email</label>
                    <input className="border-[1px] border-black rounded-md h-8 mb-4" type="email" name="Email" required />
                    <label className="text-sm mb-2" htmlFor="Mensaje">Mensaje</label>
                    <textarea className="border-[1px] border-black rounded-md mb-10" type="text" name="Mensaje" cols="15" rows="5" required></textarea>
                    <input className="bg-[#2e4474] w-full xs:w-fit text-white font-semibold uppercase py-2 px-7 rounded-3xl cursor-pointer hover:scale-105" type="submit" value="Enviar" />
                    <input type="hidden" name="_next" value="http://localhost:5173/" />
                    <input type="hidden" name="_captcha" value="true" />
            </form>
            <img loading="lazy" className=" max-lg:hidden block rounded-r-3xl w-full h-full" src={imgForm} alt="Persona trabajando en una fábrica" />
        </div>
        <div className="bg-[#0a457d] h-20 w-full absolute bottom-0 -z-10"></div>
        </div>
        </>
    );
};