import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const Details = () => {
  useTitle("Details");

  return (
    <div className="bg-transparent py-20 rounded-xl font-montserrat">
      <h3 className="my-10 uppercase font-semibold text-3xl text-center">
        Azahar Mia’s Family Tree
      </h3>
      <hr className="mb-10 border-gray-400" />

      {/* Family Tree Layout */}
      <div className="flex flex-col items-center gap-6">

        {/* Azahar Mia */}
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-2" />
          <h4 className="text-xl font-bold">Azahar Mia</h4>
          <p className="text-sm text-gray-300">Born: — | Died: —</p>
        </div>

        {/* Parents */}
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold mt-6">Parents</p>
          <div className="flex gap-10 mt-2">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-1" />
              <p className="font-bold">Abdul Majid</p>
              <p className="text-sm text-gray-300">Father</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-1" />
              <p className="font-bold">Gulu</p>
              <p className="text-sm text-gray-300">Mother</p>
            </div>
          </div>
        </div>

        {/* Uncle */}
        <div className="text-center mt-6">
          <p className="text-lg font-semibold">Uncle</p>
          <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-1" />
          <p className="font-bold">Abdul Ali</p>
        </div>

        {/* Siblings */}
        <div className="mt-10 w-full max-w-xl">
          <p className="text-lg font-semibold text-center mb-4">Siblings</p>
          <div className="grid grid-cols-2 gap-4">
            {[
              "1.Banu",
              "2.Mojar",
              "3.Azahar Mia",
              "4.Abdus Salam",
              "5.Hussain Banu",
              "6.Gulap Jaan",
              "7.Abdul Alim",
            ].map((name) => (
              <div key={name} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-1" />
                <p className="font-bold">{name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Button */}
        <div className="mt-10">
          <Link to="/kid">
            <button className="px-6 py-3 bg-gradient-to-b from-[#64748b] to-transparent text-white font-semibold rounded-lg shadow-lg hover:from-transparent hover:to-[#64748b] transition duration-300">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
