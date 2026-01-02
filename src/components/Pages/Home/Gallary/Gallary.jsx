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

      <div className="flex justify-center">
  <div className="stats shadow font-semibold">
  
  <div  onClick={handleLikeClick} className="stat bg-gray-200 hover:bg-gray-300">
    <div className="stat-figure text-secondary ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title" disabled={isLiked}>{isLiked ? "Liked" : "Like"}</div>
    <div 
    className="font-extrabold text-4xl">{likeCount}</div>
  </div>
  
  <div className="stat bg-slate-200 hover:bg-slate-300 ">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title">Total Views</div>
    <div className="stat-value">320</div>
  </div>
  
  <div className="stat bg-zinc-200 hover:bg-zinc-300 ">
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
