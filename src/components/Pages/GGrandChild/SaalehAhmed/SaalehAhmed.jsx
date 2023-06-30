import { useEffect , useState  } from "react";
import saleh_photo from "../../../../../src/assets/images/saleh_ahmed.jpg"

const SaalehAhmed = () => {
    
    const [salehs, setSalehs] = useState([]);
    const [selectedId, setSelectedId] = useState(null);


    useEffect(() => {
        fetch('../json_files/saleh.json')
          .then(res => res.json())
          .then(data => setSalehs(data))
      }, [])

    return (
        <div className="w-full ms-10 border  bg-gray-100 p-5 rounded-xl">
          <div className="flex justify-center">
          <img className="w-[120px] -mb-12 rounded-full " src={saleh_photo} alt="" />
          </div>
            <h3 className="my-20 uppercase font-semibold text-3xl flex justify-center">Saleh Ahmed's Info</h3>
            <hr className="-mt-14 mb-10" />
            <div>
            <p className="mb-2">○ <span className="font-bold text-purple-600">Saleh Ahmed</span> has Ten Childrens:</p> <br />

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>index</th>
        <th>Name</th>
        <th>Spouse Name</th>
        <th>Kids</th>
      </tr>
    </thead>
    <tbody>
        {
            salehs.map((saleh, index) => 
      <tr key={saleh.id}>
        <td>{index + 1}</td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={saleh?.photo} />
              </div>
            </div>
            <div>
              <div className="font-bold">{saleh?.english_name}</div>
              <div className="text-sm opacity-50">{saleh?.bangla_name}</div>
            </div>
          </div>
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={saleh?.spouse_photo} />
              </div>
            </div>
            <div>
              <div className="font-bold">{saleh?.spouse_e_name}</div>
              <div className="text-sm opacity-50">{saleh?.spouse_b_name}</div>
            </div>
          </div>
        </td>

        <td>
          {/* ---------------- modal ------------- */}
<label htmlFor={`my_modal_${saleh.id}`} onClick={() => setSelectedId(saleh.id)} className="btn btn-ghost btn-xs">
  details
  </label>

<input type="checkbox" id={`my_modal_${saleh.id}`} className="modal-toggle" />
<div className="modal text-white">
  <div className="modal-box w-11/12 max-w-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

  {selectedId && (
      <>
        <h3 className="font-bold text-lg uppercase ">
          {salehs.find(saleh => saleh.id === selectedId)?.english_name} kids info:
          {salehs.find(saleh => saleh.id === selectedId)?.childrens?.length}
        </h3>
        <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="text-white">
      <tr>
        <th>index</th>
        <th>avatar</th>
        <th>English Name</th>
        <th>Bangla Name</th>
      </tr>
    </thead>
    <tbody className="font-semibold ">
        ...
      <tr>
        <td>1</td>
        <td>
          <img className="w-[75px] rounded-full" src={saleh?.childrens?.[0]?.grand_child_one_photo} alt="" />
        </td>
        <td>{saleh?.childrens?.[0]?.grand_child_one_english}</td>
        <td>{saleh?.childrens?.[0]?.grand_child_one_bangla}</td>
      </tr>
      <tr>
        <td>2</td>
        <td>
          <img className="w-[75px] rounded-full" src={saleh?.childrens?.[1]?.grand_child_two_photo} alt="" />
        </td>
        <td>{saleh?.childrens?.[1]?.grand_child_two_english}</td>
        <td>{saleh?.childrens?.[1]?.grand_child_two_bangla}</td>
      </tr>
    </tbody>
  
  </table>
</div>
        </div>
      </>
    )}

    <div className="modal-action">
      <label htmlFor={`my_modal_${selectedId}`} className="btn">Close!</label>
    </div>
  </div>
</div>
        </td>
      </tr>
            )
        }
    </tbody>
    
  </table>
</div>

            </div>
        </div>
    );
};

export default SaalehAhmed;