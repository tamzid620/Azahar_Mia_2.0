import Banner from "./Banner/Banner";
import BLog from "./Blog/BLog";
import FirstDiv from "./FirstDiv/FirstDiv";
import Gallary from "./Gallary/Gallary";
import History from "./HomeDetails/HomeDetails";
import SpecialThanks from "./SpecialThanks/SpecialThanks";

const Home = () => {

    return (
        <div>

            {/* homepage banner section  */}
            <div>
                <Banner/>
            </div>
            {/* homepage  first div section  */}
            <div >
                <FirstDiv/>
            </div>
            {/* PREVIEW SECTION  */}
            <div>
                <Gallary/>
            </div>
            {/* homepage  details section  */}
            <div>
                <History/>
            </div>
            {/* aboutme section  */}
            <div>
                <BLog/>
            </div>
            {/* spcial thanks section  */}
            <div>
                <SpecialThanks/>
            </div>

        </div>
    );
};

export default Home;