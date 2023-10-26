import { Brand } from "./Brand";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
    <div className="flex justify-center gap-y-5 xlg:justify-between flex-wrap w-11/12 mx-auto my-8 h-auto items-center">
    <Brand></Brand>
    <nav className=" w-full xlg:w-8/12 h-min grid max-sm:grid-cols-1 grid-cols-4">
        <Link className="link" to={`/`}>Inicio</Link>
        <div className="dropdown block relative group m-auto">
            <p className="link xlg:mr-0">Conoce MSF</p>
            <div className="z-30 bg-white hidden group-hover:flex absolute -left-1 flex-col w-[200px] shadow-dropDown rounded-lg">
                <Link className="linkDrop border-b-2 border-b-gray-500" to={`/`}>Nuestra Historia</Link>
                <Link className="linkDrop border-b-2 border-b-gray-500" to={`/`}>Servicios</Link>
                <Link className="linkDrop" to={`/`}>Productos</Link>
            </div>
        </div>
        <Link className="link xlg:mr-0" to={`/`}>Obras y clientes</Link>
        <Link className="link xlg:mr-0" to={`/Contacto`}>Contacto</Link>
    </nav>
    </div>
    );
};