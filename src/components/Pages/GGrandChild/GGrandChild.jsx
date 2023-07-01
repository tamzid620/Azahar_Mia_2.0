import { NavLink, Outlet } from "react-router-dom";
import { FcHome , FcDataBackup ,FcBusinessman ,FcBusinesswoman } from "react-icons/fc";
import useTitle from "../../../hooks/useTitle";


const GGrandChild = () => {
    useTitle('Dashboard')

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="my-28 btn bg-blue-900 text-white drawer-button lg:hidden">View Details</label>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-gray-100 font-semibold uppercase text-base-content">

                        <li><NavLink to="/"><FcHome/> Home</NavLink></li>
                        <li><NavLink to="/kid"><FcDataBackup/> Back</NavLink></li>

                        <div className="divider"></div>

                        <li><NavLink to="/dashboard/abeda"><FcBusinesswoman/> Abeda Khatun</NavLink></li>
                        <li><NavLink to="/dashboard/saaleh"><FcBusinessman/> Saleh Ahmed</NavLink></li>
                        <li><NavLink to="/dashboard/nojir"><FcBusinessman/> Nojir Ahmed</NavLink></li>
                        <li><NavLink to="/dashboard/jalal"><FcBusinessman/> Jalal Ahmed</NavLink></li>
                        <li><NavLink to="/dashboard/julakha"><FcBusinesswoman/> Julekha Khatun</NavLink></li>
                        <li><NavLink to="/dashboard/anjumum"><FcBusinesswoman/> Anjumun Nahar</NavLink></li>
                        <li><NavLink to="/dashboard/mubarak"><FcBusinessman/> Mubarak Ali</NavLink></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default GGrandChild;