export const Banner = ({ img , alt , text }) => {
    return(<>
        <div className="flex flex-row w-full h-[8px]">
            <div className="w-1/4 bg-primaryBlue"></div><div className="bg-primaryOrange w-1/4"></div><div className="bg-primaryGreen w-1/4"></div><div className="bg-black w-1/4"></div>
        </div>
        <div className="relative flex justify-center items-center">
            <img loading="lazy" className="w-full max-h-[29rem] min-h-[13rem] overflow-hidden" src={img} alt={alt} />
            <h2 className="z-20 absolute  mx-5 px-5 text-white textBorder text-center text-4xl lg:text-[4rem] lg:leading-[66px] font-bold font-sans bg-primaryBlue bg-opacity-60">{text}</h2>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
        </div>
    </>
)}