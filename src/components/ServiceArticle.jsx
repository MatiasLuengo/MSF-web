import { FaArrowRight } from "react-icons/fa";

export const ServiceArticle = ({ text }) => {
    return (
        <div className="grid grid-flow-col items-center justify-start text-xl mt-4 gap-x-4">
            <FaArrowRight className="text-2xl"/>
            <p>{text}</p>
        </div>
    );
};