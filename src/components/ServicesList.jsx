import { Service } from "./Service";
import soldador from "../assets/soldador.jpg"
import agro from "../assets/agro.jpg"
import embalse from "../assets/embalse.jpg"
import ferroviario from "../assets/ferroviario.jpg"

export const ServicesList = ({  }) => {

    return (
        <div className="w-12/12 m-auto gap-6 grid grid-cols-autoColServices place-items-center">
            <Service route={"/Servicios"} tittle={"industrias"} imgService={soldador} imgAlt={"Imagen de soldador"} textColor={"group-hover:text-[#2e4474]"} bgColor={"group-hover:bg-[#2e4474]"}/>
            <Service route={"/Servicios"} tittle={"el sector nuclear"} imgService={embalse} imgAlt={"Imagen de embalsenuclear"} textColor={"group-hover:text-[#ce6043]"} bgColor={"group-hover:bg-[#ce6043]"}/>
            <Service route={"/Servicios"} tittle={"el sector agrario"} imgService={agro} imgAlt={"Imagen de máquina agrícola"} textColor={"group-hover:text-[#1d988a]"} bgColor={"group-hover:bg-[#1d988a]"}/>
            <Service route={"/Servicios"} tittle={"el sector ferroviario"} imgService={ferroviario} imgAlt={"Imagen industria ferroviaria"} textColor={"group-hover:text-gray-400"} bgColor={"group-hover:bg-gray-400"}/>
        </div>
    );
};