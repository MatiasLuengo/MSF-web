import { Service } from "./Service";
import soldador from "../assets/soldador.jpg"
import agro from "../assets/agro.jpg"
import embalse from "../assets/embalse.jpg"
import ferroviario from "../assets/ferroviario.jpg"
import industria1PopUp from "../assets/sectores/Otras_Industrias_1.png"
import industria2PopUp from "../assets/sectores/Otras_Industrias_2.png"
import ferroviario1PopUp from "../assets/sectores/Sector_ferroviario_1.png"
import ferroviario2PopUp from "../assets/sectores/Sector_ferroviario_2.png"
import nuclear1PopUp from "../assets/sectores/Sector_nuclear_1.png"
import nuclear2PopUp from "../assets/sectores/Sector_nuclear_2.png"
import agrario1PopUp from "../assets/sectores/Sector_agrario_1.png"
import agrario2PopUp from "../assets/sectores/Sector_agrario_2.png"

export const ServicesList = ({  }) => {
    return (
        <div className="w-12/12 m-auto gap-6 grid grid-cols-autoColServices place-items-center">
            <Service tittle={"industrias"} imgService={soldador} imgAlt={"Imagen de soldador"} textColor={"group-hover:text-[#2e4474]"} bgColor={"group-hover:bg-[#2e4474]"} popUp1={industria1PopUp} popUp2={industria2PopUp}/>
            <Service tittle={"el sector nuclear"} imgService={embalse} imgAlt={"Imagen de embalsenuclear"} textColor={"group-hover:text-[#ce6043]"} bgColor={"group-hover:bg-[#ce6043]"} popUp1={nuclear1PopUp} popUp2={nuclear2PopUp}/>
            <Service tittle={"el sector agrario"} imgService={agro} imgAlt={"Imagen de máquina agrícola"} textColor={"group-hover:text-[#1d988a]"} bgColor={"group-hover:bg-[#1d988a]"} popUp1={agrario1PopUp} popUp2={agrario2PopUp}/>
            <Service tittle={"el sector ferroviario"} imgService={ferroviario} imgAlt={"Imagen industria ferroviaria"} textColor={"group-hover:text-gray-400"} bgColor={"group-hover:bg-gray-400"} popUp1={ferroviario1PopUp} popUp2={ferroviario2PopUp}/>
        </div>
    );
};