export const GetCurrentYear = () => {
    const newDate = new Date();
    const update = newDate.getFullYear().toString();
    return(
        <p className="text-white text-center pb-2 text-xs">2023 - {update} MSF Tech - Realizado por <a className="hover:text-gray-300" href="https://matiasluengo.com" target="_blank" rel="noreferrer noopener">Matías Luengo</a></p>
)}