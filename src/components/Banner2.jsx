export const Banner2 = ({ img , img2,  alt , text }) => {
    return(<>
        <div className="flex flex-row w-full h-[8px]">
            <div className="w-1/4 bg-primaryBlue"></div><div className="bg-primaryOrange w-1/4"></div><div className="bg-primaryGreen w-1/4"></div><div className="bg-black w-1/4"></div>
        </div>
        <div className="relative flex justify-center items-center w-full  min-[570px]:h-[17rem] min-[890px]:h-[22rem] min-[1190px]:h-[29rem]">
            
            <img loading="lazy" className=" block h-full w-full lg:w-1/2" src={img} alt={alt} />
            <img loading="lazy" className=" hidden lg:block h-full w-1/2" src={img2} alt={alt} />
            
            <h2 className="z-20 absolute  mx-5 px-5 text-white textBorder text-center text-4xl lg:text-[4rem] lg:leading-[66px] font-bold font-sans  bg-opacity-60">{text}</h2>
        </div>
        <div className="flex flex-row w-full h-[8px]">
            <div className="w-1/4 bg-primaryBlue"></div><div className="bg-primaryOrange w-1/4"></div><div className="bg-primaryGreen w-1/4"></div><div className="bg-black w-1/4"></div>
        </div>
    </>
)}