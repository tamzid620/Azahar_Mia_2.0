import { Link } from "react-router-dom";


const SaalehAhmed = () => {
    return (
        <div className="w-full ms-10 border  bg-gray-100 p-5 rounded-xl">
            <h3 className="my-20 uppercase font-semibold text-3xl flex justify-center">Saleh Ahmed's Info</h3>
            <div className="mt-10 flex justify-center">
                    <button className="uppercase btn bg-gray-800 text-white ">
                        <Link to="/kid">... Previous</Link>
                    </button>
                </div>
        </div>
    );
};

export default SaalehAhmed;