import Hero from "../../components/Hero";
import BestSeller from "../../Products/BestSeller";
import FeaturedCollection from "../../Products/FeaturedCollection";
import FeaturedSection from "../../Products/FeaturedSection";
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
            <FeaturedSection></FeaturedSection>
        </div>
    );
};

export default Home;