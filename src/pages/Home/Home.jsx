import Hero from "../../components/Hero";
import BestSeller from "../../Products/BestSeller";
import GenderCollection from "../../Products/GenderCollection";
import NewArrival from "../../Products/NewArrival";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <GenderCollection></GenderCollection>
            <NewArrival></NewArrival>
            <BestSeller></BestSeller>
        </div>
    );
};

export default Home;