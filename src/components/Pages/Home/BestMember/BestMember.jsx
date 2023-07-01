import photo1 from '../../../../../src/assets/images/non_mahram.jpg'
import photo2 from '../../../../../src/assets/images/babul.jpg'
import photo3 from '../../../../../src/assets/images/noor_mohammad.jpg'
import photo4 from '../../../../../src/assets/images/Mobin.jpg'
import photo5 from '../../../../../src/assets/images/karfa.jpg'

const BestMember = () => {
    return (
            <div className="my-20">
            <h2 className="font-bold text-3xl uppercase flex justify-center mt-10">
        Best Members
      </h2>
            <hr className="mt-5"/>
<div>
<div className="overflow-x-auto flex justify-center mt-10">
  <table className="table w-1/2">
    {/* head */}
    <thead>
      <tr>
        <th>index</th>
        <th>photo</th>
        <th>English_Name</th>
        <th>Banagla_Name</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12 transition-all duration-300 hover:w-[100px] hover:h-[100px]">
                <img src={photo1} />
              </div>
            </div>
          </div>
        </td>
        <td>Jesmin Aktar</td>
        <td>জেসমিন আক্তার</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12 transition-all duration-300 hover:w-[100px] hover:h-[100px]">
                <img src={photo2} />
              </div>
            </div>
          </div>
        </td>
        <td>Muhammad Islam Babul</td>
        <td>মোহাম্মাদ ইসলাম বাবুল</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12 transition-all duration-300 hover:w-[100px] hover:h-[100px]">
              <img src={photo3} />
              </div>
            </div>
          </div>
        </td>
        <td>Nur Muhamma Siddique</td>
        <td>নূর মোহাম্মদ সিদ্দিকী</td>
      </tr>
      {/* row 4 */}
      <tr>
        <th>4</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12 transition-all duration-300 hover:w-[100px] hover:h-[100px]">
              <img src={photo4} />
              </div>
            </div>
          </div>
        </td>
        <td>Mobinul Alam</td>
        <td>মুবিনুল আলম</td>
      </tr>
      {/* row 5 */}
      <tr>
        <th>4</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12 transition-all duration-300 hover:w-[100px] hover:h-[100px]">
              <img   src={photo5} />
              </div>
            </div>
          </div>
        </td>
        <td>Riyad Ull Monir</td>
        <td>রিয়াদ উল মনির</td>
      </tr>

    </tbody>
  </table>
</div>
</div>

        </div>
    );
};

export default BestMember;