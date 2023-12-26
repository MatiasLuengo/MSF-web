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
    </div>
    );
};