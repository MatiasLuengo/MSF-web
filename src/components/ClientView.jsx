export const ClientView = ({ client }) => {
    return (
        <a key={client.id} href={client.link} target="_blank">
            <article className=" w-52 h-52 border-2 rounded-lg flex flex-col items-center justify-center hover:scale-105">
                {/* <h3 className=" text-xl font-semibold mt-4">{client.name}</h3> */}
                <img className="p-4 w-max h-max" src={client.image} alt=""></img>
            </article>
        </a>
    );
};