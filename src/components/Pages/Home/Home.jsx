import Banner from "./Banner/Banner";
import FirstDiv from "./FirstDiv/FirstDiv";
import Gallary from "./Gallary/Gallary";
import History from "./HomeDetails/HomeDetails";

const Home = () => {

    return (
        <div>

            {/* homepage banner section  */}
            <div>
                <Banner></Banner>
            </div>
            {/* homepage  first div section  */}
            <div >
                <FirstDiv></FirstDiv>
            </div>
            {/* PREVIEW SECTION  */}
            <div>
                <Gallary></Gallary>
            </div>
            {/* homepage  details section  */}
            <div>
                <History></History>
            </div>

        </div>
    );
};

export default Home;