export const Banner = ({ img , alt , text }) => {
    return(<>
        <div className="flex flex-row w-full h-[8px]">
            <div className="w-1/4 bg-primaryBlue"></div><div className="bg-primaryOrange w-1/4"></div><div className="bg-primaryGreen w-1/4"></div><div className="bg-black w-1/4"></div>
        </div>
        <div className="relative flex justify-center items-center w-full h-[12rem] min-[570px]:h-[17rem] min-[820px]:h-[22rem] min-[1090px]:h-[29rem]">
            <div className="h-full w-[10%]">
                <div className="w-full h-2/3 bg-primaryBlue"></div><div className="w-full h-1/3 bg-primaryBlue"></div>
            </div>
            <img loading="lazy" className=" block h-full w-[80%]" src={img} alt={alt} />
            <div className="h-full w-[10%]">
                <div className="w-full h-1/3 bg-black"></div><div className="w-full h-2/3 bg-black"></div>
            </div>
            <h2 className="z-20 absolute w-9/12  text-white textBorder text-center text-4xl lg:text-[4rem] lg:leading-[66px] font-bold font-sans  bg-opacity-60">{text}</h2>
        </div>
        <div className="flex flex-row w-full h-[8px]">
            <div className="w-1/4 bg-primaryBlue"></div><div className="bg-primaryOrange w-1/4"></div><div className="bg-primaryGreen w-1/4"></div><div className="bg-black w-1/4"></div>
        </div>
    </>
)}