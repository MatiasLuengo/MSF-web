import { Link } from "react-router-dom";
import isotipo from "../../public/isotipo.png";
import logotipo from "../assets/logotipo.webp";
import { topFunction } from "../scripts/back-to-top";

export const Brand = ({  }) => {
    return (
        <Link className="w-fit flex flex-row items-center gap-4 group" to={`/`} onClick={topFunction}>
            <img className="w-14 h-14 group-hover:animate-spin-once" src={isotipo} alt="MSF Isotipo"></img>
            <img className=" h-14" src={logotipo} alt="MSF Logotipo"></img>
        </Link>
    );
};