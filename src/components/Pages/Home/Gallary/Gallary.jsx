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

      {/* <div className="my-20 flex flex-wrap justify-center gap-10 text-center">
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
      </div> */}

      <div className="flex justify-center">
  <div className="stats shadow">
  
  <div  onClick={handleLikeClick} className="stat bg-red-100 hover:bg-red-300 ">
    <div className="stat-figure text-secondary ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title" disabled={isLiked}>{isLiked ? "Liked" : "Like"}</div>
    <div 
    className="font-extrabold text-4xl">{likeCount}</div>
  </div>
  
  <div className="stat bg-blue-100 hover:bg-blue-300 ">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title">Total Views</div>
    <div className="stat-value">320</div>
  </div>
  
  <div className="stat bg-green-100 hover:bg-green-300 ">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">Total Members</div>
    <div className="stat-value">162</div>
  </div>
  
</div>
      </div>

    </div>
  );
};

export default Gallary;
