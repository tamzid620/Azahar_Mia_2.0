import { useEffect } from "react";
import { useState } from "react";



const AbedaKhatun = () => {

    const [abedas, setAbedas] = useState([])

    useEffect(() => {
        fetch('')
    }, [])

    return (
        <div className="w-full ms-10 border  bg-gray-100 p-5 rounded-xl">
            <h3 className="my-20 uppercase font-semibold text-3xl flex justify-center">Abeda Khatun's Info</h3>
            <div>

            </div>
        </div>
    );
};

export default AbedaKhatun;