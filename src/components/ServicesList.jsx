import { Service } from "./Service";
import soldador from "../assets/soldador.jpg"
import agro from "../assets/agro.jpg"
import embalse from "../assets/embalse.jpg"

export const ServicesList = ({  }) => {
    return (
        <div className="w-11/12 m-auto flex flex-row flex-wrap justify-between gap-y-6">
            <Service route={"/"} tittle={"industrias metalúrgicas"} imgService={soldador} imgAlt={"Imagen de soldador"} textColor={"group-hover:text-[#2e4474]"} bgColor={"group-hover:bg-[#2e4474]"}/>
            <Service route={"/"} tittle={"industrias agronómicas"} imgService={agro} imgAlt={"Imagen de máquina agrícola"} textColor={"group-hover:text-[#1d988a]"} bgColor={"group-hover:bg-[#1d988a]"}/>
            <Service route={"/"} tittle={"industrias de energía nuclear"} imgService={embalse} imgAlt={"Imagen de embalsenuclear"} textColor={"group-hover:text-[#ce6043]"} bgColor={"group-hover:bg-[#ce6043]"}/>
        </div>
    );
};