import useTitle from "../../../hooks/useTitle";
import ContactUs from "../ContactUs/ContactUs";
import Banner from "./Banner/Banner";
import Gallary from "./Gallary/Gallary";
import SpecialThanks from "./SpecialThanks/SpecialThanks";

const Home = () => {
    useTitle('Home')

    return (
        <div>
                <Banner/>
                <Gallary/>
                <SpecialThanks/>
                <ContactUs/>

        </div>
    );
};

export default Home;