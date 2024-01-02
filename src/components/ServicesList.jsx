import { Service } from "./Service";
import soldador from "../assets/genericas/soldador.jpg"
import agro from "../assets/genericas/campo-cultivo-tractor.jpg"
import embalse from "../assets/embalse.jpg"
import ferroviario from "../assets/genericas/envio-contenedores-carga-traves.jpg"
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
        <div className="w-12/12 m-auto gap-x-2 gap-y-6 grid min-[715px]:grid-cols-2 min-[1350px]:grid-cols-4 place-items-center">
            <Service tittle={"industrias"} imgService={soldador} imgAlt={"Imagen de soldador"} textColor={"group-hover:text-[#2e4474]"} bgColor={"group-hover:bg-[#2e4474]"} popUp1={industria1PopUp} popUp2={industria2PopUp}/>
            <Service tittle={"el sector nuclear"} imgService={embalse} imgAlt={"Imagen de embalsenuclear"} textColor={"group-hover:text-[#ce6043]"} bgColor={"group-hover:bg-[#ce6043]"} popUp1={nuclear1PopUp} popUp2={nuclear2PopUp}/>
            <Service tittle={"el sector agrario"} imgService={agro} imgAlt={"Imagen de máquina agrícola"} textColor={"group-hover:text-[#1d988a]"} bgColor={"group-hover:bg-[#1d988a]"} popUp1={agrario1PopUp} popUp2={agrario2PopUp}/>
            <Service tittle={"el sector ferroviario"} imgService={ferroviario} imgAlt={"Imagen industria ferroviaria"} textColor={"group-hover:text-gray-400"} bgColor={"group-hover:bg-gray-400"} popUp1={ferroviario1PopUp} popUp2={ferroviario2PopUp}/>
        </div>
    );
};