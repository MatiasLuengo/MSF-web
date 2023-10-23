import { Link } from "react-router-dom";
import imgLogo from "../assets/msf_logo.png";
import { topFunction } from "../scripts/back-to-top";

export const Brand = ({  }) => {
    return (
        <Link className="w-fit flex flex-row items-center gap-3 group" to={`/`} onClick={topFunction}>
            <img className="w-14 h-14 group-hover:animate-spin-once" src={imgLogo} alt="MSF Isotipo"></img>
            <div className="w-60 items-center">
                <h1 className="text-5xl font-bold p-0 m-0">msftech</h1>
                <p className="text-justify text-sm uppercase">Ingeniería especializada</p>
            </div>
        </Link>
    );
};