import msftech from "../assets/msf.svg"
import iso from "../assets/ISO-9001W.svg"
import iqnet from "../assets/iqNetW.svg"
import {topFunction} from "../scripts/back-to-top"

export const Footer = ({  }) => {
    return (
        <footer className="bg-[#0a457d]">
            <div className="w-10/12 m-auto flex flex-row flex-wrap items-center justify-center gap-14 xl:justify-between py-20">
                <div className="flex flex-col text-white">
                    <div onClick={topFunction} className="flex flex-row gap-2 items-center text-xl uppercase cursor-pointer hover:scale-105">
                        <i className='bx bx-globe text-2xl' ></i>
                        <p>msftech.com.ar</p>
                    </div>
                    <a href="https://maps.app.goo.gl/vrZNhYvnM3GounpS8" target="_blanck" className="flex flex-row gap-2 items-center text-xl uppercase cursor-pointer hover:scale-105">
                        <i className='bx bx-map text-2xl' ></i>
                        <p>José Gontero 4661</p>
                    </a>
                    <a href="mailto:calidad@msftech.com.ar" className="flex flex-row gap-2 items-center text-xl uppercase hover:scale-105">
                        <i className='bx bx-envelope text-2xl'></i>
                        <p>calidad@msftech.com.ar</p>
                    </a>
                    <div className="flex flex-row gap-2 items-center text-xl uppercase">
                        <i className='bx bxs-phone text-2xl' ></i>
                        <p>3564-314043 / 3564 366909</p>
                    </div>
                    <div className="flex flex-row justify-around items-center text-4xl uppercase mt-5">
                        <a className="hover:scale-105" href="https://www.facebook.com/msftechsa" target="_blank">
                            <i className='bx bxl-facebook-square' ></i>
                        </a>
                        <a className="hover:scale-105" href="https://www.instagram.com/msftechsa" target="_blank">
                        <i className='bx bxl-instagram' ></i>
                        </a>
                        <a className="hover:scale-105" href="https://www.linkedin.com/feed/update/urn:li:activity:7120039199910617089" target="_blank">
                        <i className='bx bxl-linkedin-square' ></i>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row">
                    <img className="w-24" src={iqnet} alt="Logo de IQNet" />
                    <img className="w-24" src={iso} alt="Logo ISO 9001" />
                </div>
                <img className="h-20" src={msftech} alt="Isologotipo de MSF Tech" />
            </div>
        </footer>
    );
};