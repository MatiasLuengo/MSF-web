export const Service = ({ imgService, imgAlt, tittle }) => {
    return (
        <>
            <article className="border w-72 h-72 rounded-3xl">
                <img className=" rounded-t-3xl" src={imgService} alt={imgAlt} />
                <h3 className="text-xl ml-8">Servicios para <span className="font-semibold">{tittle}</span></h3>
                <button className="uppercase ml-8 text-xs">Conoce más</button>
            </article>
        </>
    );
};