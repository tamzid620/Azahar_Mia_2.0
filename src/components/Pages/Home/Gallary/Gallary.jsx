import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Gallary = () => {
  // const [likeCount, setLikeCount] = useState(158);
  // const [isLiked, setIsLiked] = useState(false);
  // const [views, setViews] = useState(0);

  // useEffect(() => {
  //   fetch("https://azahar-mia-family-tree.vercel.app/")
  //     .then(res => res.json())
  //     .then(data => setViews(data.value));
  // }, []);

  // const handleLikeClick = () => {
  //   if (!isLiked) {
  //     setLikeCount(likeCount + 1);
  //     setIsLiked(true);
  //     Swal.fire({
  //       icon: "success",
  //       title: "Add Like Successfully",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //   }
  // };

  return (
    <div>
      {/* <div>
      <h2 className="font-bold text-3xl uppercase flex justify-center mt-10">
        Preview Section
      </h2>
      <div className="divider"></div>

      <div className="flex justify-center">
        <div className="stats shadow font-semibold">

          <div onClick={handleLikeClick} className="stat bg-gray-200 hover:bg-gray-300">
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
            <div className="stat-value">430</div>
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

    </div> */}
      <div>
        {/* About section  */}
        <section className="py-16  bg-gradient-to-l from-primary_color to-secondary_color text-white">
          <div className="container mx-auto text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">About Our Family Tree</h2>
            <p className="text-gray-100">
              This website helps you visualize generations, preserve memories,
              and share stories with loved ones.
            </p>
          </div>
        </section>
        {/* Interactive Tree section */}
        <section className="py-16 px-0 md:px-5 lg:px-5 bg-gradient-to-l from-primary_color to-secondary_color">
          <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Interactive Tree",
                description:
                  "Navigate generations with a dynamic family tree view.",
              },
              {
                title: "Photo Gallery",
                description: "Preserve and share family memories in one place.",
              },
              {
                title: "Timeline",
                description:
                  "Track important family events across generations.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-gradient-to-r from-[#64748b] to-[#0ea5e9] text-white font-semibold shadow-lg rounded-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-indigo-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallary;
