import imgForm from "../assets/genericas/trabajador-fabrica-vistiendo-uni.jpg"

export const ContactForm = ({  }) => {
    return (
        <>
        <h2 className="text-center text-[50px] font-bold mb-20 mt-28 text-[#2e4474] font-rubik">Contactanos</h2>
        <div className="relative">
            <div className="bg-white w-10/12 m-auto rounded-3xl border-[1px] border-black grid min-[880px]:grid-cols-2 z-20 shadow-lg">
                <form className=" w-10/12 m-auto rounded-3xl flex flex-col py-10" action="https://formsubmit.co/calidad@msftech.com.ar" method="POST">
                        <label className="text-sm mb-2" htmlFor="Nombre">Nombre y Apellido</label>
                        <input className="border-[1px] border-black rounded-md h-8 mb-4" type="text" name="Nombre" id="Nombre" required />
                        <label className="text-sm mb-2" htmlFor="Teléfono">Teléfono</label>
                        <input className="border-[1px] border-black rounded-md h-8 mb-4" type="text" name="Teléfono" id="Teléfono" required />
                        <label className="text-sm mb-2" htmlFor="Email">Email</label>
                        <input className="border-[1px] border-black rounded-md h-8 mb-4" type="email" name="Email" id="Email" autoComplete="email" required />
                        <label className="text-sm mb-2" htmlFor="Mensaje">Mensaje</label>
                        <textarea className="border-[1px] border-black rounded-md mb-10" type="text" name="Mensaje" id="Mensaje" cols="15" rows="5" required ></textarea>
                        <input className="bg-[#2e4474] w-full xs:w-fit text-white font-semibold uppercase py-2 px-7 rounded-3xl cursor-pointer hover:scale-105" type="submit" value="Enviar" />
                        <input type="hidden" name="_next" value="http://www.msftech.com.ar/" />
                        <input type="hidden" name="_captcha" value="true" />
                </form>
                <img loading="lazy" className=" max-[880px]:hidden block rounded-r-3xl w-full h-full" src={imgForm} alt="Persona trabajando en una fábrica" />
            </div>
            <div className="bg-[#0a457d] h-20 w-full absolute bottom-0 -z-10"></div>
        </div>
        </>
    );
};