import { Service } from "./Service";
import soldador from "../assets/soldador.jpg"

export const ServicesList = ({  }) => {
    return (
        <div className="w-11/12 m-auto">
        <Service tittle={"industrias metalúrgicas"} imgService={soldador} imgAlt={"Imagen de soldador"}/>
        </div>
    );
};