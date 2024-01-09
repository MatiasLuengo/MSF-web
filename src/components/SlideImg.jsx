export const SlideImg = ({ client }) => {
    return (
        <div className="slide">
            <img className="w-[250px] h-auto" src={client.image} alt={client.name} />
        </div>
    );
};