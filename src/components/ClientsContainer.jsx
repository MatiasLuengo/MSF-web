import { useState, useEffect } from "react";
import { currentClients } from "../scripts/showClients";
import {ClientView} from "./ClientView"

export const ClientsContainer = ({  }) => {

    const [clients, setClients] = useState([]);
    useEffect(()=>{
        setClients(currentClients);
    },[])

    return (
        <section className="">
            <div className="w-10/12 m-auto flex flex-row gap-4 flex-wrap justify-center mb-20">
                {clients.map(client =>
                    <ClientView client={client} key={client.id}></ClientView>)}
            </div>
        </section>
    );
};