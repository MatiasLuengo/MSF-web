export const ServiceArticle = ({ text }) => {
    return (
        <div className="flex items-center text-xl mt-4 gap-x-4">
            <i className='bx bx-right-arrow-alt text-4xl'></i>
            <p>{text}</p>
        </div>
    );
};