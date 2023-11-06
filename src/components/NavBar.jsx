import { Brand } from "./Brand";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
    <div className="flex justify-center gap-y-5 xlg:justify-between flex-wrap w-11/12 mx-auto my-8 h-auto items-center">
    <Brand></Brand>
    <nav className=" w-full xlg:w-8/12 h-min flex max-[670px]:flex-col flex-row">
        <Link className="link min-[990px]:mr-0" to={`/`}>Inicio</Link>
        <Link className="link min-[990px]:mr-0" to={`/Nuestra Historia`}>Nuestra Historia</Link>
        <Link className="link min-[990px]:mr-0" to={`/servicios`}>Servicios</Link>
        <Link className="link min-[990px]:mr-0" to={`/Contacto`}>Contacto</Link>
    </nav>
    {/* <nav className=" w-full xlg:w-8/12 h-min grid max-[670px]:grid-cols-1 grid-cols-4">
        <Link className="link min-[670px]:ml-0" to={`/`}>Inicio</Link>
        <div className="dropdown block relative group m-auto min-[670px]:ml-0">
            <p className="link">Conoce MSF</p>
            <div className="z-30 bg-white hidden group-hover:flex absolute -left-1 flex-col w-[200px] shadow-dropDown rounded-lg">
                <Link className="linkDrop border-b-2 border-b-gray-500" to={`/Nuestra Historia`}>Nuestra Historia</Link>
                <Link className="linkDrop" to={`/Servicios`}>Servicios</Link>
            </div>
        </div>
        <Link className="link min-[670px]:ml-0" to={`/Trabaja con nosotros`}>Trabaja con nosotros</Link>
        <Link className="link min-[670px]:mr-0" to={`/Contacto`}>Contacto</Link>
    </nav> */}
    </div>
    );
};