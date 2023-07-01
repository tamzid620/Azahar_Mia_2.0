import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";


const Details = () => {
    useTitle('Details')
    return (
        <div className="bg-gray-100 p-5 rounded-xl">
            <h3 className="my-20 uppercase font-semibold text-3xl flex justify-center">Azahar Mia's Details</h3>
            <hr className="-mt-14 mb-10" />
            <div className="ms-5 leading-relaxed">
                <p className="mb-2">○ <span className="font-bold text-purple-600">Azahar Mia</span>'s father's name was <span className="text-blue-800 font-bold">Abdul Majid</span>.</p>
                <p className="mb-2">○ <span className="font-bold text-purple-600">Azahar Mia</span>'s Uncle's name was <span className="text-blue-800 font-bold">Abdul Ali</span>.</p>
                <p className="mb-2">○ <span className="font-bold text-purple-600">Azahar Mia</span>'s mother's name was <span className="text-blue-800 font-bold">Gulu</span>.</p>
                <p className="mb-2">○ <span className="font-bold text-purple-600">Azahar Mia</span> had Seven Siblings :</p>
                <ul className="list-disc pl-5 mb-2">
                    <li className="mb-1">➨ <span className="text-green-800 font-bold">Banu</span></li>
                    <li className="mb-1">➨ <span className="text-green-800 font-bold">Mojar</span></li>
                    <li className="mb-1">➨ <span className="text-green-800 font-bold">Azahar Mia</span></li>
                    <li className="mb-1">➨ <span className="text-green-800 font-bold">Abdus Salam</span></li>
                    <li className="mb-1">➨ <span className="text-green-800 font-bold">Hussain Banu</span></li>
                    <li className="mb-1">➨ <span className="text-green-800 font-bold">Gulap Jaan</span></li>
                    <li className="mb-1">➨ <span className="text-green-800 font-bold">Abdul Alim</span></li>
                </ul>
                <div className="mt-10 flex justify-center">
                    <button className="uppercase btn bg-gray-800 text-white ">
                        <Link to="/kid">Next ...</Link>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Details;