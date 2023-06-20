import facebook from '../../../../src/assets/icons/facebook.png'
import instagram from '../../../../src/assets/icons/instagram.png'
import linkedin from '../../../../src/assets/icons/linkedin.png'
import github from '../../../../src/assets/icons/github.png'

const Footer = () => {
    return (
        <div className="mt-20">
            <footer className="footer p-10 bg-base-300 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    
                    <div className="grid grid-flow-col gap-4">
                        <div><a href="https://www.facebook.com/tamzid.ull.monir512"><img style={{ width: "30px" }} src={facebook} alt="" /></a></div>

                        <div><a href="https://www.instagram.com/Tamzid_Ull_Monir/"><img style={{ width: "30px" }} src={instagram} alt="" /></a></div>

                        <div><a href="https://www.linkedin.com/in/tamzid-monir-96b163260/"><img style={{ width: "30px" }} src={linkedin} alt="" /></a></div>

                        <div><a href="https://github.com/tamzid620"><img style={{ width: "30px" }} src={github} alt="" /></a></div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;