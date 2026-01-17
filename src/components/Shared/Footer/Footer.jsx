import facebook from "../../../../src/assets/icons/facebook.png";
import instagram from "../../../../src/assets/icons/instagram.png";
import linkedin from "../../../../src/assets/icons/linkedin.png";
import github from "../../../../src/assets/icons/github.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#64748b] text-white font-semibold py-8 px-5 font-montserrat">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">
          &copy; 2026 Family Tree. All rights reserved.
        </p>
        <div className="flex space-x-4">
            <Link to="https://www.linkedin.com/in/tamzid-ull-monir-96b163260" target="_blank">
              <img style={{ width: "30px" }} src={linkedin} alt="" />
            </Link>
            <Link to="https://github.com/tamzid620" target="_blank">
              <img style={{ width: "30px" }} src={github} alt="" />
            </Link>
            <Link to="https://www.facebook.com/tamzid.ull.monir512" target="_blank">
              <img style={{ width: "30px" }} src={facebook} alt="" />
            </Link>
            <Link to="https://www.instagram.com/Tamzid_Ull_Monir/" target="_blank">
              <img style={{ width: "30px" }} src={instagram} alt="" />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
