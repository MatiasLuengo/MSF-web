import usuario from "../assets/staff/usuario.jpg"

export const StaffView = ({ staff }) => {
    return (
        <article key={staff.id} className="relative group w-60 h-96 border-2 rounded-[50px] flex flex-col items-center justify-start overflow-hidden shadow-md">
            {staff.image &&
            <img className=" h-[70%] w-full" src={staff.image} alt=""></img>
            }
            {!staff.image &&
            <img className=" h-[70%] w-full" src={usuario} alt=""></img>
            }
            <div className="flex flex-row w-full h-[5px]">
                <div className="w-1/3 bg-primaryBlue opacity-100"></div><div className="bg-primaryOrange w-2/3"></div>
            </div>
            {staff.name &&
            <p className="text-xl font-bold mt-2 text-gray-600">{staff.name}</p>
            }
            {staff.position &&
            <p className="mt-2">{staff.position}</p>
            }
            <div className="hidden bg-primaryBlue absolute top-0 bottom-0 left-0 right-0 group-hover:block text-white">
                <div className="h-1/2 flex flex-col justify-end w-10/12 mx-auto">
                    <p className="text-2xl font-bold mt-2">{staff.name}</p>
                    <p className="mt-2 text-lg">{staff.position}</p>
                </div>
                <div className="bg-white w-2/3 mx-auto h-[2px] my-4"></div>
                <div className="w-10/12 mx-auto h-1/2 relative">
                    {staff.email &&
                    <div className="flex flex-row gap-x-1 items-center">
                        <i className='bx bx-envelope'></i>
                        <p className="text-sm">{staff.email}</p>
                    </div>
                    }
                    {staff.tel &&
                    <div className="flex flex-row gap-x-1 items-center mt-2">
                        <i className='bx bxl-whatsapp'></i>
                        <p className="text-sm">{staff.tel}</p>
                    </div>
                    }
                    <div className="bg-white w-4 h-4 rounded-tl-full absolute right-0 top-[100px] border-primaryBlue border-[1px]"></div>
                    <div className="bg-white w-4 h-4 rounded-br-full absolute right-0 top-[116px] border-primaryBlue border-[1px]"></div>
                    <div className="bg-white w-4 h-4 rounded-tr-full absolute right-[16px] top-[116px] border-primaryBlue border-[1px]"></div>
                    <div className="bg-white w-4 h-4 rounded-bl-full absolute right-[32px] top-[116px] border-primaryBlue border-[1px]"></div>
                    <div className="bg-white w-4 h-4 rounded-tl-full absolute right-[48px] top-[116px] border-primaryBlue border-[1px]"></div>
                </div>
            </div>
        </article>
    );
};