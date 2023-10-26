import msftech from "../assets/msf.svg"
import iso from "../assets/ISO-9001.svg"
import iqnet from "../assets/iqNet.svg"

export const Footer = ({  }) => {
    return (
        <footer className="bg-[#0a457d]">
            <div className="w-10/12 m-auto flex flex-row flex-wrap items-center justify-center gap-14 xl:justify-between py-20">
                <div className="flex flex-col text-white">
                    <div className="flex flex-row gap-2 items-center text-xl uppercase">
                        <i className='bx bx-globe text-2xl' ></i>
                        <a href="">msftech.com.ar</a>
                    </div>
                    <div className="flex flex-row gap-2 items-center text-xl uppercase">
                        <i className='bx bx-map text-2xl' ></i>
                        <p>José Gontero 4661</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center text-xl uppercase">
                        <i className='bx bx-envelope text-2xl'></i>
                        <p>Calidad@msftech.com.ar</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center text-xl uppercase">
                        <i className='bx bxs-phone text-2xl' ></i>
                        <p>3564 314043 / 3564 667340</p>
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