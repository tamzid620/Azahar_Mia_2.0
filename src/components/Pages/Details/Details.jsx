import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const Details = () => {
  useTitle("Details");
  return (
    <div className="bg-transparent p-5 rounded-xl">
      <h3 className="my-20 uppercase font-semibold text-3xl flex justify-center">
        Azahar Mia’s Details
      </h3>
      <hr className="-mt-14 mb-10" />
      <div className="ms-5 leading-relaxed font-montserrat">
        <p className="mb-2">
          ○ <span className="font-bold ">Azahar Mia</span>{" "}
          father’s name was{" "}
          <span className=" font-bold">Abdul Majid</span>.
        </p>
        <p className="mb-2">
          ○ <span className="font-bold ">Azahar Mia</span>{" "}
          Uncle’s name was{" "}
          <span className=" font-bold">Abdul Ali</span>.
        </p>
        <p className="mb-2">
          ○ <span className="font-bold ">Azahar Mia</span>{" "}
          mother’s name was{" "}
          <span className=" font-bold">Gulu</span>.
        </p>
        <p className="mb-2">
          ○ <span className="font-bold ">Azahar Mia</span> had
          Seven Siblings :
        </p>
        <ul className="list-disc pl-5 mb-2">
          <li className="mb-1">
            ➨ <span className=" font-bold">Banu</span>
          </li>
          <li className="mb-1">
            ➨ <span className=" font-bold">Mojar</span>
          </li>
          <li className="mb-1">
            ➨ <span className=" font-bold">Azahar Mia</span>
          </li>
          <li className="mb-1">
            ➨ <span className=" font-bold">Abdus Salam</span>
          </li>
          <li className="mb-1">
            ➨ <span className=" font-bold">Hussain Banu</span>
          </li>
          <li className="mb-1">
            ➨ <span className=" font-bold">Gulap Jaan</span>
          </li>
          <li className="mb-1">
            ➨ <span className=" font-bold">Abdul Alim</span>
          </li>
        </ul>
        <div className="mt-10 flex justify-center">
          <Link to="/kid">
            <button className="px-6 py-3 mt-2 bg-gradient-to-b from-[#64748b] to-transparent text-white font-semibold rounded-lg shadow-lg hover:from-transparent hover:to-[#64748b] transition duration-300">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
