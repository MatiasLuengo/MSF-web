import { Link } from "react-router-dom";
import {topFunction} from "../scripts/back-to-top"

export const Service = ({ imgService, imgAlt, tittle, textColor, bgColor, route }) => {
    return (
        <Link onClick={topFunction} to={route} className="w-min mx-auto block rounded-[42px]">
            <article className="border w-[350px] h-96 rounded-[42px] shadow-md group cursor-pointer">
                <div className="relative overflow-hidden h-1/2">
                    <img className="rounded-t-[42px] bg-cover h-full w-full" src={imgService} alt={imgAlt} />
                    <div className={`absolute inset-0 ${bgColor} opacity-0 group-hover:opacity-50 rounded-t-[42px]`}></div>
                </div>
                <h3 className="text-2xl ml-8 my-4 font-medium">Servicios para<br/><span className={`font-bold ${textColor}`}>{tittle}</span></h3>
                <button className={`uppercase ml-8 text-xs bg-black ${bgColor} text-white py-2 px-4 rounded-2xl`}>Conoce más</button>
            </article>
        </Link>
    );
};