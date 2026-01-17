import useTitle from "../../../hooks/useTitle";
import ContactUs from "../ContactUs/ContactUs";
import Banner from "./Banner/Banner";
import BestMember from "./BestMember/BestMember";
import BLog from "./Blog/BLog";
import FirstDiv from "./FirstDiv/FirstDiv";
import Gallary from "./Gallary/Gallary";
import HeroSection from "./HeroSection/HeroSection";
import History from "./HomeDetails/HomeDetails";
import SpecialThanks from "./SpecialThanks/SpecialThanks";

const Home = () => {
    useTitle('Home')

    return (
        <div>
            {/* homepage banner section  */}
            <div>
                {/* <Banner/> */}
                <HeroSection/>
            </div>
            {/* homepage  first div section  */}
            <div >
                {/* <FirstDiv/> */}
            </div>
            {/* PREVIEW SECTION  */}
            <div>
                <Gallary/>
            </div>
            {/* homepage  details section  */}
            <div>
                {/* <History/> */}
            </div>
            {/* best member section  */}
            <div>
                {/* <BestMember/> */}
            </div>
            {/* aboutme section  */}
            <div>
                {/* <BLog/> */}
            </div>
            {/* spcial thanks section  */}
            <div>
                <SpecialThanks/>
            </div>
            <div>
                <ContactUs/>
            </div>

        </div>
    );
};

export default Home;