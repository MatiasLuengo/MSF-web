import { Link } from "react-router-dom";

export const NotRouteMatch = ({  }) => {
    return (
        <section className="min-h-[300px] flex flex-col justify-center mx-auto items-center text-center gap-y-3">
            <h2 className="text-[#0a457d] text-3xl bolder">Hubo un problema</h2>
            <p className="text-lg">Parece que esta página no existe</p>
            <Link className="hover:textBorder" to={`/`}>Ir a la página principal</Link>
        </section>
    )
};