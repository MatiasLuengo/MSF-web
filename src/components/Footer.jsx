import msftech from "../assets/msf.svg"
import iso from "../assets/ISO-9001W.svg"
import iqnet from "../assets/iqNetW.svg"
import {topFunction} from "../scripts/back-to-top"
import { GetCurrentYear } from "../scripts/GetCurrentYear"
import { BsGlobe } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = ({  }) => {
    return (
        <footer className="bg-[#0a457d]">
            <div className="w-10/12 m-auto flex flex-row flex-wrap items-center justify-center gap-8 min-[1150px]:justify-between py-20">
                <div className="flex flex-col text-white">
                    <div onClick={topFunction} className="flex flex-row gap-2 items-center text-xl  cursor-pointer hover:scale-105">
                        <BsGlobe className="mt-1 text-2xl" />
                        <p>msftech.com.ar</p>
                    </div>
                    <a href="https://maps.app.goo.gl/vrZNhYvnM3GounpS8" target="_blanck" className="flex flex-row gap-2 items-center text-xl  cursor-pointer hover:scale-105" rel="noreferrer noopener">
                        <FiMapPin className="text-2xl"/>
                        <p>José Gontero 4661<br/>Parque Industrial - San Francisco</p>
                    </a>
                    <div className="flex flex-row gap-2 items-center text-xl ">
                        <FaPhone className="ml-1"/>
                        <p>3564 314043 / 3564 366909</p>
                    </div>
                    <div className="flex flex-row justify-around items-center text-4xl uppercase mt-5">
                        <a className="hover:scale-105" href="https://www.facebook.com/msftechsa" target="_blank" rel="noreferrer noopener" aria-label="Ir a Facebook">
                            <RiFacebookBoxFill />
                        </a>
                        <a className="hover:scale-105" href="https://www.instagram.com/msftechsa" target="_blank" rel="noreferrer noopener" aria-label="Ir a Instagram">
                            <FaInstagram />
                        </a>
                        <a className="hover:scale-105" href="https://www.linkedin.com/feed/update/urn:li:activity:7120039199910617089" target="_blank" rel="noreferrer noopener" aria-label="Ir a Linkedin">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                <div className="flex flex-row">
                    <img className="w-24" src={iqnet} loading="lazy" alt="Logo de IQNet" />
                    <img className="w-24" src={iso} loading="lazy" alt="Logo ISO 9001" />
                </div>
                <img className="h-20" src={msftech} loading="lazy" alt="Isologotipo de MSF Tech" />
            </div>
            <GetCurrentYear/>
        </footer>
    );
};