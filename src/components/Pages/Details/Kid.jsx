import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";


const Kid = () => {
  useTitle('Kid')

  const [kids, setKids] = useState([])

  useEffect(() => {
    fetch('../json_files/kids.json')
      .then(res => res.json())
      .then(data => setKids(data))
  }, [])

  return (
    <div className="bg-gray-100 p-5 rounded-xl">
      <h3 className="my-20 uppercase font-semibold text-3xl flex justify-center">Azahar Mia's Generations</h3>
      <hr className="-mt-14 mb-10" />
      <div className="ms-5 leading-relaxed">
        <p className="mb-2">○ <span className="font-bold text-purple-600">Azahar Mia</span> married <span className="text-green-800 font-bold">Nur Zahan Begum</span></p>
        <p className="mb-2">○ <span className="font-bold text-purple-600">Azahar Mia</span> has Four Sons and Three Daughters:</p>
        <div>
          <div className="overflow-x-auto mt-10">
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
                {
                  kids.map((kid , index) => (
                    <tr key={kid.id}>
                      <th>{index +1}</th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12 me-2">
                              <img src={kid?.photo} alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{kid?.english_name}</div><br />
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
                            <div className="font-bold">{kid?.spouse_e_name}</div> <br />
                            <span>{kid?.spouse_b_name}</span>
                          </div>
                        </div>
                      </td>
                      <th>
                        <td>{kid?.kids}</td>
                      </th>
                    </tr>
                  ))
                }
                {/* table row one --------- */}
                {/* <tr>
                  <th>1</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 me-2">
                          <img src="https://i.etsystatic.com/28684825/r/il/b43416/3822262111/il_794xN.3822262111_ehf5.jpg" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Abeda Khatun</div><br />
                        <span>আবেদা খাতুন</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 me-2">
                          <img src="https://www.superfitgymconshy.com/uploads/1/3/4/6/134680505/1_orig.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Jobor Muluk</div> <br />
                        <span>জবর মুলুক</span>
                      </div>
                    </div>
                  </td>
                  <th>
                    <td>06</td>
                  </th>
                </tr> */}
                {/* table row two --------- */}
                {/* <tr>
                  <th>2</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 me-2">
                          <img src="https://www.linkpicture.com/q/IMG_20230617_233800.jpg" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Saleh Ahmed</div><br />
                        <span>সালেহ আহমদ</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 me-2">
                          <img src="https://i.etsystatic.com/28684825/r/il/b43416/3822262111/il_794xN.3822262111_ehf5.jpg" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Zuhura Begum/Fathema Begum</div> <br />
                        <span>জুহুরা বেগম / ফাতেমা বেগম</span>
                      </div>
                    </div>
                  </td>
                  <th>
                    <td>10</td>
                  </th>
                </tr> */}
                {/* table row three --------- */}
                {/* <tr>
                  <th>3</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 me-2">
                          <img src="https://www.linkpicture.com/q/IMG_20230617_233821.jpg?fbclid=IwAR0wGjVLkgO_fdLcJqBmXwREnxYcSaNVO3x7nnh4PcaPuVLzwCUu2wAPxpA" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Nojir Ahmed</div><br />
                        <span>নজির আহমদ</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 me-2">
                          <img src="https://i.etsystatic.com/28684825/r/il/b43416/3822262111/il_794xN.3822262111_ehf5.jpg" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Sarah Khatun</div> <br />
                        <span>সারা খাতুন</span>
                      </div>
                    </div>
                  </td>
                  <th>
                    <td>08</td>
                  </th>
                </tr> */}
                {/* table row four --------- */}
                {/* <tr>
                  <th>1</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 me-2">
                          <img src="https://www.linkpicture.com/q/IMG_20230617_233843.jpg?fbclid=IwAR10Z9QFvHx7FK94m6bgndam9F2Jb-y6shNGicUUznEz44NQc5l7rlBUDSY" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Jalal Ahmed</div><br />
                        <span>জালাল আহমদ</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 me-2">
                          <img src="https://i.etsystatic.com/28684825/r/il/b43416/3822262111/il_794xN.3822262111_ehf5.jpg" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Aaju Meher</div> <br />
                        <span>আজু মেহের</span>
                      </div>
                    </div>
                  </td>
                  <th>
                    <td>07</td>
                  </th>
                </tr> */}
                {/* table row five --------- */}
                {/* <tr>
                  <th>1</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 me-2">
                          <img src="https://i.etsystatic.com/28684825/r/il/b43416/3822262111/il_794xN.3822262111_ehf5.jpg" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Julekha Khatun</div><br />
                        <span>জুলেখা খাতুন</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 me-2">
                          <img src="https://www.superfitgymconshy.com/uploads/1/3/4/6/134680505/1_orig.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Mustafizur Rahman</div> <br />
                        <span>মুজতাফিজুর রহমান</span>
                      </div>
                    </div>
                  </td>
                  <th>
                    <td>05</td>
                  </th>
                </tr> */}
                {/* table row six --------- */}
                {/* <tr>
                  <th>1</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 me-2">
                          <img src="https://i.etsystatic.com/28684825/r/il/b43416/3822262111/il_794xN.3822262111_ehf5.jpg" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Anjumun Nahar</div><br />
                        <span>আনজুমন নাহার</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 me-2">
                          <img src="https://www.superfitgymconshy.com/uploads/1/3/4/6/134680505/1_orig.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Rashid Ahmed</div> <br />
                        <span>রশিদ আহমদ</span>
                      </div>
                    </div>
                  </td>
                  <th>
                    <td>04</td>
                  </th>
                </tr> */}
                {/* table row seven --------- */}
                {/* <tr>
                  <th>1</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 me-2">
                          <img src="https://www.linkpicture.com/q/355474500_232842249523770_608792393957047348_n.jpg" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Mubarak Ali</div><br />
                        <span>মোবারক আলী</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 me-2">
                          <img src="https://i.etsystatic.com/28684825/r/il/b43416/3822262111/il_794xN.3822262111_ehf5.jpg" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Husnara Begum</div> <br />
                        <span> হোসনে আরা</span>
                      </div>
                    </div>
                  </td>
                  <th>
                    <td>01</td>
                  </th>
                </tr> */}

              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <button className="uppercase btn bg-gray-800 text-white ">
            <Link to="/details">... Previous</Link>
          </button>
          <button className="uppercase btn bg-gray-800 text-white ">
            <Link to="/dashboard">Next ...</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Kid;