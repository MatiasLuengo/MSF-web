import { useState, useEffect } from "react";
import { currentClients } from "../scripts/showClients";
import {SlideImg} from "./SlideImg"

export const TrustUs = ({  }) => {

    const [clients, setClients] = useState([]);
    useEffect(()=>{
        setClients(currentClients);
    },[])

    return (
        <section className="">
            <p className="text-center mt-10 w-11/12 mx-auto">Las imágenes que se muestran son sólo de referencia y guardan la confidencialidad con nuestros clientes</p>
            <h2 className="uppercase text-center text-4xl font-bold mb-10 mt-24 mx-2">Confían en nosotros</h2>
            <div className="slider">
                <div className="slide_track">
                    {clients.map(client =>
                        <SlideImg client={client} key={client.id}/>)}
                </div>
            </div>
        </section>
    );
};