import {ContactForm} from "../components/ContactForm"
import img_obras from "../assets/interior.jpg"
import aaimg_obras from "../assets/interior2.jpg"
import { Banner2 } from "../components/Banner2"
import { ServiceArticle } from "../components/ServiceArticle"
import contact from "../assets/genericas/trabajador-funcionamiento-maquin.webp"
import workers from "../assets/genericas/workers.webp"
import ingenieros from "../assets/genericas/gerente-fabrica-visitando-linea.webp"

import { useEffect } from "react"

export const Services = ({  }) => {

    useEffect(() => {
        const ToLeftFade1 = document.getElementById('ToLeftFade1');
        const ToLeftFade2 = document.getElementById('ToLeftFade2');
        const ToRightFade1 = document.getElementById('ToRightFade1');
        if (ToLeftFade1 && ToRightFade1 && ToLeftFade2) {
            const fadeInEffect = (entries, observer) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.classList.add('opacity-1', 'ease-in-out', 'transition', 'duration-700', 'scale-100', 'animate-fadeIn');
                    element.classList.remove('opacity-0', 'scale-75', 'translate-x-44', '-translate-x-44');
                }
                });
            };
        
            const observer = new IntersectionObserver(fadeInEffect, {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            });
        
            observer.observe(ToLeftFade1);
            observer.observe(ToRightFade1);
            observer.observe(ToLeftFade2);
            }
        }, []);

    return (
        <>
        <Banner2 img={img_obras} img2={aaimg_obras} alt={"Taller Industrial"} text={"Nuestros servicios"}/>
        <span id="services"></span>
        <div className="w-full overflow-hidden">
            <div className="w-10/12 m-auto flex flex-col">
                <article className=" flex flex-col gap-y-6 xlg:flex-row mt-20">
                    <div className="pr-10 pt-10">
                        <h3 className="text-[45px] font-bold font-sans">Diseño Personalizado:</h3>
                        <p className="mt-4 text-xl">Nuestro equipo de ingenieros altamente capacitados se dedica a diseñar soluciones a medida que se adaptan a las necesidades específicas de cada cliente. Desde piezas únicas hasta proyectos completos, estamos preparados para llevar las ideas desde el concepto hasta la realidad.</p>
                    </div>
                    <div id="ToLeftFade1" className="relative flex justify-center items-center w-fit h-fit opacity-0 scale-75 translate-x-44">
                        <img className=" max-w-md w-full xlg:w-fit" src={contact} alt="Diseño Personalizado" />
                        <div className="flex flex-row h-[20px] absolute -top-[5px] left-0 w-1/2 bg-primaryBlue"></div>
                        <div className="flex flex-col w-[20px] absolute -top-[5px] -right-[10px] bg-primaryOrange h-2/3"></div>
                    </div>
                </article>

                <article className=" flex flex-col items-end xlg:flex-row mt-20">
                    <div id="ToRightFade1" className="relative flex justify-center items-center w-fit h-fit opacity-0 scale-75 -translate-x-44">
                        <img className=" max-w-md w-full xlg:w-fit" src={workers} alt="Fabricación de Precisión." />
                        <div className="flex flex-row  h-[20px] absolute -top-[10px] right-0 w-2/3 bg-primaryOrange"></div>
                        <div className="flex flex-col h-[15px] absolute -bottom-[5px] left-0 bg-primaryGreen w-2/3"></div>
                    </div>
                    <div className="pl-10 pt-10 max-w-md">
                        <h3 className="text-[45px] font-bold font-sans">Fabricación de Precisión:</h3>
                        <p className="mt-4 text-xl">Contamos con tecnología de última generación y un equipo de fabricación altamente calificado que garantiza productos de alta calidad y durabilidad.</p>
                    </div>
                </article>

                <article className=" flex flex-col gap-y-6 xlg:flex-row mt-20">
                    <div className="pr-10 pt-10 ">
                        <h3 className="text-[45px] font-bold font-sans">Asistencia Técnica de Ingeniería:</h3>
                        <p className="mt-4 text-xl">Nuestros expertos en ingeniería están disponibles para brindar asesoramiento técnico, resolver problemas y ofrecer soluciones efectivas.</p>
                    </div>
                    <div id="ToLeftFade2" className="relative flex justify-center items-center w-fit h-fit opacity-0 scale-75 translate-x-44">
                        <img className=" max-w-md w-full xlg:w-fit" src={ingenieros} alt="Asistencia Técnica de Ingeniería." />
                        <div className="flex flex-row  h-2/3 absolute -top-[10px] -left-[10px] w-[20px] bg-primaryBlue"></div>
                        <div className="flex flex-col h-[15px] absolute -bottom-[10px] -right-[5px] bg-primaryGreen w-2/3"></div>
                    </div>
                    
                </article>
                <div className="h-[15px] bg-primaryOrange w-1/12 min-w-[100px] mx-auto my-24"></div>
                <ServiceArticle text={"Servicios de ingeniería, diseño, cálculos, verificaciones tecnológicas."}/>
                <ServiceArticle text={"Celdas robotizadas, integración ABB, KUKA, COMAU, otros."}/>
                <ServiceArticle text={"Automatización de procesos industriales, líneas de montaje, máquinas especiales."}/>
                <ServiceArticle text={"Máquinas de ensayo, desarrollo de  software industrial orientados."}/>
                <ServiceArticle text={"Graficación/Generación de reportes entorno Windows / SCADA."}/>
                <ServiceArticle text={"Máquinas a CNC."}/>
                <ServiceArticle text={"Piezas y productos para la sustitución de importaciones."}/>
                <ServiceArticle text={"Matricería especializada."}/>
                <ServiceArticle text={"Tuberías y estructuras metálicas con soldadores calificados."}/>
                <ServiceArticle text={"Inspección de soldaduras y ensayos no destructivos (tintas, partículas magnéticas, ultrasonido) con personal calificado propio  nivel II."}/>
                <ServiceArticle text={"Asesoría externa contratada permanente de nivel III de soldadura."}/>
            </div>
        </div>
        <ContactForm/>
        </>
    )
}