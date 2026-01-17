import useTitle from "../../../hooks/useTitle";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  useTitle("Contact Us");

const handleSubmit = (e) => {
   e.preventDefault();
    toast.info("We are working on it 🚧",
       { position: "top-center", 
        autoClose: 1500,
         hideProgressBar: false,
          closeOnClick: true,
           pauseOnHover: true,
            draggable: true,
             theme: "dark",
             });
            }

  return (
    <div id="contactUs" className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center mt-16 py-16 px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10">
        
        {/* Left Section - Contact Info */}
        <div className="space-y-6 text-white">
          <h1 className="text-4xl font-bold mb-6 text-[#0ea5e9] uppercase">Get in Touch</h1>
          <p className="text-lg font-montserrat mb-8">
            We’d love to hear from you! Reach out through any of the channels below or send us a message directly.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#0ea5e9]" />
              <span>tamzid620@gmiil.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-[#25D366]" />
              <span>+8801852951963</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#0ea5e9]" />
              <span>+8801852951963</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#ef4444]" />
              <span>123 Main Street, City, State, Country</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a href="https://twitter.com/Tamzid_Monir" className="hover:text-[#0ea5e9]"><FaTwitter size={22} /></a>
            <a href="https://www.instagram.com/Tamzid_Ull_Monir/" className="hover:text-pink-500"><FaInstagram size={22} /></a>
            <a href="https://www.facebook.com/tamzid.ull.monir512" className="hover:text-blue-500"><FaFacebook size={22} /></a>
            <a href="https://www.linkedin.com/in/tamzid-monir-96b163260/" className="hover:text-blue-400"><FaLinkedin size={22} /></a>
            <a href="https://github.com/tamzid620" className="hover:text-gray-300"><FaGithub size={22} /></a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white/5 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-[#0ea5e9] mb-6">Send a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
            ></textarea>
            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-[#0ea5e9] text-white font-semibold rounded-lg hover:bg-[#0284c7] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
         {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
