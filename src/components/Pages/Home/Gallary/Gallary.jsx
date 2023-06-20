import { useState } from "react";
import Swal from "sweetalert2";

const Gallary = () => {
  const [likeCount, setLikeCount] = useState(158);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    if (!isLiked) {
      setLikeCount(likeCount + 1);
      setIsLiked(true);
      Swal.fire({
        icon: 'success',
        title: 'Add Like Successfully',
        showConfirmButton: false,
        timer: 1500
      })
    }
  };

  return (
    <div>
      <h2 className="font-bold text-3xl uppercase flex justify-center mt-10">
        Preview Section
      </h2>
      <div className="divider"></div>
      <div className="my-20 flex flex-wrap justify-center gap-10 text-center">
        <div className="like">
          <div className="card w-96 bg-red-100 shadow-2xl pt-4 hover:bg-red-300 transform hover:scale-105 transition duration-300">
            <div className="text-3xl font-semibold">{likeCount}</div>
            <div className="card-body">
              <button
                onClick={handleLikeClick}
                className="card-title uppercase text-4xl flex justify-center"
                disabled={isLiked}
              >
                {isLiked ? "Liked" : "Like"}
              </button>
            </div>
          </div>
        </div>
        <div className="total view">
          <div className="card w-96 bg-blue-100 shadow-2xl pt-4 hover:bg-blue-300 transform hover:scale-105 transition duration-300">
            <div className="text-3xl font-semibold">320</div>
            <div className="card-body">
              <h2 className="card-title uppercase text-4xl flex justify-center">
                Total View
              </h2>
            </div>
          </div>
        </div>
        <div className="total members">
          <div className="card w-96 bg-green-100 shadow-2xl pt-4 hover:bg-green-300 transform hover:scale-105 transition duration-300">
            <div className="text-3xl font-semibold">162</div>
            <div className="card-body">
              <h2 className="card-title uppercase text-4xl flex justify-center">
                Total members
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
