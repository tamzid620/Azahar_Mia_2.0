import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const Kid = () => {
  useTitle("Kid");

  const [kids, setKids] = useState([]);

  useEffect(() => {
    fetch("../json_files/kids.json")
      .then((res) => res.json())
      .then((data) => setKids(data));
  }, []);

  return (
    <div className="bg-transparent p-5 rounded-xl">
      <h3 className="my-20 uppercase font-semibold text-3xl flex justify-center">
        Azahar Mia’s Generations
      </h3>
      <hr className="-mt-14 mb-10" />
      <div className="ms-5 leading-relaxed font-montserrat">
        <p className="mb-2">
          ○ <span className="font-bold 0">Azahar Mia</span> married{" "}
          <span className=" font-bold">Nur Zahan Begum</span>
        </p>
        <p className="mb-2">
          ○ <span className="font-bold 0">Azahar Mia</span> has Four Sons and
          Three Daughters:
        </p>
        <div>
          <div className="overflow-x-auto mt-10 ">
            <table className="table">
              <thead>
                <tr>
                  <th>index</th>
                  <th>Name</th>
                  <th>Spouse</th>
                  <th>Kids</th>
                </tr>
              </thead>
              <tbody>
                {kids.map((kid, index) => (
                  <tr key={kid.id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12 me-2">
                            <img src={kid?.photo} alt="" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{kid?.english_name}</div>
                          <br />
                          <span>{kid?.bangla_name}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12 me-2">
                            <img src={kid?.spouse_photo} alt="" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{kid?.spouse_e_name}</div>{" "}
                          <br />
                          <span>{kid?.spouse_b_name}</span>
                        </div>
                      </div>
                    </td>
                    <th>
                      <td>{kid?.kids}</td>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-10 flex justify-center gap-3">
          <Link to="/details">
            <button className="px-6 py-3 mt-2 bg-gradient-to-b from-[#64748b] to-transparent text-white font-semibold rounded-lg shadow-lg hover:from-transparent hover:to-[#64748b] transition duration-300">
              Back
            </button>
          </Link>
          <Link to="/dashboard">
            <button className="px-6 py-3 mt-2 bg-gradient-to-b from-[#64748b] to-transparent text-white font-semibold rounded-lg shadow-lg hover:from-transparent hover:to-[#64748b] transition duration-300">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Kid;
