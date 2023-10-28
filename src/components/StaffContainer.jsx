import { useState, useEffect } from "react";
import { ourStaff } from "../scripts/showStaff";
import {StaffView} from "./StaffView"

export const StaffContainer = ({  }) => {

    const [staff, setStaff] = useState([]);
    useEffect(()=>{
        setStaff(ourStaff);
    },[])

    return (
        <section className="">
            <div className="w-10/12 m-auto mb-20 grid grid-cols-autoColStaff gap-4 place-items-center">
                {staff.map(employee =>
                    <StaffView staff={employee} key={employee.id}></StaffView>)}
            </div>
        </section>
    );
};