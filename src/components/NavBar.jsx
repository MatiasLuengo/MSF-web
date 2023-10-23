import { Brand } from "./Brand";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
    <div className="flex flex-wrap w-11/12 mx-auto my-3 h-auto items-center">
    <Brand></Brand>
    <nav className=" w-8/12 h-min flex justify-end gap-x-20">
        <Link className="hover:font-medium duration-75 h-min" to={`/`}>INICIO</Link>
        <div className="dropdown block relative group">
            <Link className="hover:font-medium duration-75" to={`/`}>CONOCE MSF</Link>
                <div className="dropdown_content hidden group-hover:flex absolute -left-1 flex-col w-44 shadow-dropDown rounded-lg">
                    <Link className="text-sm hover:font-medium duration-75 border-b-2 border-b-gray-500 w-11/12 m-auto py-1" to={`/`}>NUESTRA HISTORIA</Link>
                    <Link className="text-sm hover:font-medium duration-75 border-b-2 border-b-gray-500 w-11/12 m-auto py-1" to={`/`}>SERVICIOS</Link>
                    <Link className="text-sm hover:font-medium duration-75 w-11/12 m-auto py-1" to={`/`}>PRODUCTOS</Link>
                </div>
        </div>
        <Link className="hover:font-medium duration-75" to={`/`}>OBRAS Y CLIENTES</Link>
        <Link className="hover:font-medium duration-75" to={`/`}>CONTACTO</Link>
    </nav>
    </div>
    );
};