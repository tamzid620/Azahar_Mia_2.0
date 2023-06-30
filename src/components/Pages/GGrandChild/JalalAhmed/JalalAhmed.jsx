import { useEffect , useState  } from "react";
import jalal_photo from "../../../../../src/assets/images/jalal_ahmed.jpg"



const JalalAhmed = () => {
            
    const [jalals, setJalals] = useState([]);
    const [selectedId, setSelectedId] = useState(null);


    useEffect(() => {
        fetch('../json_files/Jalal.json')
          .then(res => res.json())
          .then(data => setJalals(data))
      }, [])

    return (
        <div className="w-full ms-10 border  bg-gray-100 p-5 rounded-xl">
          <div className="flex justify-center">
          <img className="w-[120px] -mb-12 rounded-full " src={jalal_photo} alt="" />
          </div>
            <h3 className="my-20 uppercase font-semibold text-3xl flex justify-center">Jalal Ahmed's Info</h3>
            <hr className="-mt-14 mb-10" />
            <div>
            <p className="mb-2">○ <span className="font-bold text-purple-600">Jalal Ahmed</span> has Seven Childrens:</p> <br />

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
            jalals.map((jalal, index) => 
      <tr key={jalal.id}>
        <td>{index + 1}</td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={jalal?.photo} />
              </div>
            </div>
            <div>
              <div className="font-bold">{jalal?.english_name}</div>
              <div className="text-sm opacity-50">{jalal?.bangla_name}</div>
            </div>
          </div>
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={jalal?.spouse_photo} />
              </div>
            </div>
            <div>
              <div className="font-bold">{jalal?.spouse_e_name}</div>
              <div className="text-sm opacity-50">{jalal?.spouse_b_name}</div>
            </div>
          </div>
        </td>

        <td>
          {/* ---------------- modal ------------- */}
<label htmlFor={`my_modal_${jalal.id}`} onClick={() => setSelectedId(jalal.id)} className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white btn-xs">
  details
  </label>

<input type="checkbox" id={`my_modal_${jalal.id}`} className="modal-toggle" />
<div className="modal text-white">
  <div className="modal-box w-11/12 max-w-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

  {selectedId && (
      <>
        <h3 className="font-bold text-lg uppercase ">
          {jalals.find(jalal => jalal.id === selectedId)?.english_name} kids : 
          {jalals.find(jalal => jalal.id === selectedId)?.childrens?.length}
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
        {/* ... */}
      <tr>
        <td>1</td>
        <td>
          <img className="w-[75px] rounded-full" src={jalal?.childrens?.[0]?.grand_child_one_photo} alt="" />
        </td>
        <td>{jalal?.childrens?.[0]?.grand_child_one_english}</td>
        <td>{jalal?.childrens?.[0]?.grand_child_one_bangla}</td>
      </tr>
      {/* ...  */}
      <tr>
        <td>2</td>
        <td>
          <img className="w-[75px] rounded-full" src={jalal?.childrens?.[1]?.grand_child_two_photo} alt="" />
        </td>
        <td>{jalal?.childrens?.[1]?.grand_child_two_english}</td>
        <td>{jalal?.childrens?.[1]?.grand_child_two_bangla}</td>
      </tr>
      {/* ...  */}
      <tr>
        <td>3</td>
        <td>
          <img className="w-[75px] rounded-full" src={jalal?.childrens?.[2]?.grand_child_three_photo} alt="" />
        </td>
        <td>{jalal?.childrens?.[2]?.grand_child_three_english}</td>
        <td>{jalal?.childrens?.[2]?.grand_child_three_bangla}</td>
      </tr>
      {/* ...  */}
      <tr>
        <td>4</td>
        <td>
          <img className="w-[75px] rounded-full" src={jalal?.childrens?.[3]?.grand_child_four_photo} alt="" />
        </td>
        <td>{jalal?.childrens?.[3]?.grand_child_four_english}</td>
        <td>{jalal?.childrens?.[3]?.grand_child_four_bangla}</td>
      </tr>
      {/* ...  */}
      <tr>
        <td>5</td>
        <td>
          <img className="w-[75px] rounded-full" src={jalal?.childrens?.[4]?.grand_child_five_photo} alt="" />
        </td>
        <td>{jalal?.childrens?.[4]?.grand_child_five_english}</td>
        <td>{jalal?.childrens?.[4]?.grand_child_five_bangla}</td>
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

export default JalalAhmed;