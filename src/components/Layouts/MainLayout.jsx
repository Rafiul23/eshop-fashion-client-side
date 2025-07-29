import { Outlet } from "react-router";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;