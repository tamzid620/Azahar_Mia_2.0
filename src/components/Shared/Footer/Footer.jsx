import facebook from "../../../../src/assets/icons/facebook.png";
import instagram from "../../../../src/assets/icons/instagram.png";
import linkedin from "../../../../src/assets/icons/linkedin.png";
import github from "../../../../src/assets/icons/github.png";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#64748b] to-[#0ea5e9] text-white font-semibold  shadow-lg hover:from-[#f4b400] hover:to-[#f6c90e] transition duration-300 py-8 px-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">
          &copy; 2026 Family Tree. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <div>
            <a href="https://www.facebook.com/tamzid.ull.monir512">
              <img style={{ width: "30px" }} src={facebook} alt="" />
            </a>
          </div>

          <div>
            <a href="https://www.instagram.com/Tamzid_Ull_Monir/">
              <img style={{ width: "30px" }} src={instagram} alt="" />
            </a>
          </div>

          <div>
            <a href="https://www.linkedin.com/in/tamzid-monir-96b163260/">
              <img style={{ width: "30px" }} src={linkedin} alt="" />
            </a>
          </div>

          <div>
            <a href="https://github.com/tamzid620">
              <img style={{ width: "30px" }} src={github} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
