import { useState, useEffect } from "react";

export const Service = ({ imgService, imgAlt, tittle, textColor, bgColor, popUp1, popUp2 }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            closeModal();
            }
        };
        useEffect(() => {
            document.addEventListener('keydown', handleKeyDown);
            return () => {
            document.removeEventListener('keydown', handleKeyDown);
            };
        }, []);

    const images = [popUp1, popUp2];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const previous = ()=>{
        const condition = selectedIndex > 0;
        const nextIndex = condition? selectedIndex -1 : images.length -1;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
    }
    const next = ()=>{
        const condition = selectedIndex < images.length -1;
        const nextIndex = condition? selectedIndex +1 : 0;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
    }
    return (
        <>
        <article onClick={openModal} className="border w-11/12 max-w-[350px] h-96 rounded-[42px] shadow-md group cursor-pointer">
            <div className="relative overflow-hidden h-1/2">
                <img loading="lazy" className="rounded-t-[42px] bg-cover h-full w-full" src={imgService} alt={imgAlt} />
                <div className={`absolute inset-0 ${bgColor} opacity-0 group-hover:opacity-50 rounded-t-[42px]`}></div>
            </div>
            <h3 className="text-2xl ml-8 my-4">Servicios para<br/><span className={`font-bold ${textColor}`}>{tittle}</span></h3>
            <button className={`uppercase ml-8 text-xs bg-black ${bgColor} text-white py-2 px-4 rounded-2xl`}>Conoce más</button>
        </article>

        {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="relative w-full h-full flex flex-row justify-center items-center gap-x-6">
                    <button className="text-4xl font-semibold text-white h-min w-fit hover:scale-125" onClick={previous}>{'<'}</button>
                    <img loading="lazy" className=" w-auto max-h-[95vh] max-w-[73vw]" src={selectedImage} alt="Collage de imágenes industriales" />
                    <button className="text-4xl font-semibold text-white h-min hover:scale-125" onClick={next}>{'>'}</button>
                    <button className="absolute top-4 right-4 text-4xl font-semibold text-white hover:scale-125" onClick={closeModal}>X</button>
                </div>
            </div>
        )}
        </>
    );
};