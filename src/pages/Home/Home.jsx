import Hero from "../../components/Hero";
import BestSeller from "../../Products/BestSeller";
import FeaturedCollection from "../../Products/FeaturedCollection";
import GenderCollection from "../../Products/GenderCollection";
import NewArrival from "../../Products/NewArrival";
import WomenTop from "../../Products/WomenTop";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <GenderCollection></GenderCollection>
            <NewArrival></NewArrival>
            <BestSeller></BestSeller>
            <WomenTop></WomenTop>
            <FeaturedCollection></FeaturedCollection>
        </div>
    );
};

export default Home;