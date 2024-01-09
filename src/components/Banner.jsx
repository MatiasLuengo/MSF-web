export const Banner = ({ img , alt , text }) => {
    return(<>
        <div className="flex flex-row w-full h-[8px]">
            <div className="w-1/4 bg-primaryBlue"></div><div className="bg-primaryOrange w-1/4"></div><div className="bg-primaryGreen w-1/4"></div><div className="bg-black w-1/4"></div>
        </div>
        <div className="relative flex justify-center items-center w-full h-fit gradiante">
            <img className=" block h-full max-[450px]:w-full w-[85%] max-h-[500px] min-h-[180px]" src={img} alt={alt} />
            <h2 className="z-20 absolute min-[920px]:bottom-20 min-[1030px]:bottom-24 min-[1100px]:bottom-28 min-[1220px]:bottom-36 min-[1492px]:bottom-auto w-9/12  text-white textBorder text-center text-4xl lg:text-[4rem] lg:leading-[66px] font-bold font-sans bg-opacity-60">{text}</h2>
        </div>
        <div className="flex flex-row w-full h-[8px]">
            <div className="w-1/4 bg-primaryBlue"></div><div className="bg-primaryOrange w-1/4"></div><div className="bg-primaryGreen w-1/4"></div><div className="bg-black w-1/4"></div>
        </div>
    </>
)}