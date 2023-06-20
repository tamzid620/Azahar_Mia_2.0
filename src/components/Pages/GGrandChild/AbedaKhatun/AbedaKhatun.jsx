import { useEffect , useState  } from "react";

const AbedaKhatun = () => {

    const [abedas, setAbedas] = useState([]);

    useEffect(() => {
        fetch('../json_files/abeda.json')
          .then(res => res.json())
          .then(data => setAbedas(data))
      }, [])
    
    console.log(abedas);

    return (
        <div className="w-full ms-10 border  bg-gray-100 p-5 rounded-xl">
            <h3 className="my-20 uppercase font-semibold text-3xl flex justify-center">Abeda Khatun's Info</h3>
            <div>

            </div>
        </div>
    );
};

export default AbedaKhatun;