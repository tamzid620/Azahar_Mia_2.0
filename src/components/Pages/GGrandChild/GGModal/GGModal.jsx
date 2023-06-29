
import { Link } from 'react-router-dom';

const GGModal = ({abeda , id}) => {
    return (
        <div>
                      {/*---------------- modal ------------- */}
{/* <label htmlFor={`my_modal_${id}`} className="btn btn-ghost btn-xs">
  <Link to={`../json_files/abeda.json/${id}`}>details</Link>
  </label> */}

<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal text-white">
  <div className="modal-box w-11/12 max-w-5xl bg-black">
    <h3 className="font-bold text-lg uppercase ">{abeda?.english_name} kids info:{abeda?.childrens?.length} </h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
      <label htmlFor={`my_modal_${id}`} className="btn">Close!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default GGModal;