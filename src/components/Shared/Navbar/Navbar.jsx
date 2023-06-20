import { Link } from "react-router-dom";
import logo from '../../../../src/assets/images/A.png';


const Navbar = () => {

  const header =
    <>
      <Link to="/"><li className="font-bold"><a>Home</a></li></Link>
      <Link to="/details"><li className="font-bold"><a>AllDetails</a></li></Link>
      <Link to="/contactus"><li className="font-bold"><a>ContactUs</a></li></Link>
    </>

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {header}
            </ul>
          </div>

          <img className="w-[60px]" src={logo} alt="" />

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {header}
          </ul>
        </div>
        <div className="navbar-end">
          <button className='btn font-bold'>
            <Link to="/details">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;