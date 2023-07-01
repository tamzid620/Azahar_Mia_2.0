import { useEffect , useState  } from "react";
import anjumun_photo from "../../../../../src/assets/images/non_mahram.jpg"
import useTitle from "../../../../hooks/useTitle";


const AnjumunNahar = () => {
  useTitle('AnjumunNahar')
    
    const [anjumuns, setanjumuns] = useState([]);
    const [selectedId, setSelectedId] = useState(null);


    useEffect(() => {
        fetch('../json_files/Anjumun.json')
          .then(res => res.json())
          .then(data => setanjumuns(data))
      }, [])

    return (
        <div className="w-full ms-10 border  bg-gray-100 p-5 rounded-xl">
        <div className="flex justify-center">
        <img className="w-[120px] -mb-12 rounded-full " src={anjumun_photo} alt="" />
        </div>
          <h3 className="my-20 uppercase font-semibold text-3xl flex justify-center">Anjumun Nahar's Info</h3>
          <hr className="-mt-14 mb-10" />
          <div>
          <p className="mb-2">○ <span className="font-bold text-purple-600">Anjumun Nahar</span> has Four Childrens:</p> <br />

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
          anjumuns.map((anjumun, index) => 
    <tr key={anjumun.id}>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={anjumun?.photo} />
            </div>
          </div>
          <div>
            <div className="font-bold">{anjumun?.english_name}</div>
            <div className="text-sm opacity-50">{anjumun?.bangla_name}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={anjumun?.spouse_photo} />
            </div>
          </div>
          <div>
            <div className="font-bold">{anjumun?.spouse_e_name}</div>
            <div className="text-sm opacity-50">{anjumun?.spouse_b_name}</div>
          </div>
        </div>
      </td>

      <td>
        {/* ---------------- modal ------------- */}
<label htmlFor={`my_modal_${anjumun.id}`} onClick={() => setSelectedId(anjumun.id)} className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white btn-xs">
details
</label>

<input type="checkbox" id={`my_modal_${anjumun.id}`} className="modal-toggle" />
<div className="modal text-white sm: w-1/2 lg:w-full">
<div className="modal-box w-11/12 max-w-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

{selectedId && (
    <>
    <div className="flex items-center">
      <img className="w-[100px] rounded-full" src={anjumun?.photo} /> <span className="text-3xl"> + </span>
      <img className="w-[100px] rounded-full" src={anjumun?.spouse_photo} />
      </div>
      <h3 className="font-bold text-lg uppercase ">
        {anjumuns.find(anjumun => anjumun.id === selectedId)?.english_name} kids : 
        {anjumuns.find(anjumun => anjumun.id === selectedId)?.childrens?.length}
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
        <img className="w-[75px] rounded-full" src={anjumun?.childrens?.[0]?.grand_child_one_photo} alt="" />
      </td>
      <td>{anjumun?.childrens?.[0]?.grand_child_one_english}</td>
      <td>{anjumun?.childrens?.[0]?.grand_child_one_bangla}</td>
    </tr>
    {/* ...  */}
    <tr>
      <td>2</td>
      <td>
        <img className="w-[75px] rounded-full" src={anjumun?.childrens?.[1]?.grand_child_two_photo} alt="" />
      </td>
      <td>{anjumun?.childrens?.[1]?.grand_child_two_english}</td>
      <td>{anjumun?.childrens?.[1]?.grand_child_two_bangla}</td>
    </tr>
    {/* ...  */}
    <tr>
      <td>3</td>
      <td>
        <img className="w-[75px] rounded-full" src={anjumun?.childrens?.[2]?.grand_child_three_photo} alt="" />
      </td>
      <td>{anjumun?.childrens?.[2]?.grand_child_three_english}</td>
      <td>{anjumun?.childrens?.[2]?.grand_child_three_bangla}</td>
    </tr>
    {/* ...  */}
    <tr>
      <td>4</td>
      <td>
        <img className="w-[75px] rounded-full" src={anjumun?.childrens?.[3]?.grand_child_four_photo} alt="" />
      </td>
      <td>{anjumun?.childrens?.[3]?.grand_child_four_english}</td>
      <td>{anjumun?.childrens?.[3]?.grand_child_four_bangla}</td>
    </tr>
    {/* ...  */}
    <tr>
      <td>5</td>
      <td>
        <img className="w-[75px] rounded-full" src={anjumun?.childrens?.[4]?.grand_child_five_photo} alt="" />
      </td>
      <td>{anjumun?.childrens?.[4]?.grand_child_five_english}</td>
      <td>{anjumun?.childrens?.[4]?.grand_child_five_bangla}</td>
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

export default AnjumunNahar;