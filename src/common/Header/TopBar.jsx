import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TopBar = () => {
    return (
        <div className="bg-alpha py-3 text-white">
            <div className="container px-2 mx-auto flex items-center gap-3 justify-between">
                <div className="md:flex hidden items-center gap-3">
                    <a href="#" className="hover:text-gray-200">
                        <FaFacebookF className="h-5 w-5"/>
                    </a>
                    <a href="#" className="hover:text-gray-200">
                        <FaInstagram className="h-5 w-5"/>
                    </a>
                    <a href="#" className="hover:text-gray-200">
                        <FaXTwitter className="h-5 w-5"/>
                    </a>
                </div>
                <div className="text-center text-sm font-semibold flex-grow">
                    <p>We deliver products countrywide - Fast and reliable!</p>
                </div>
                <div className="text-sm text-center hidden md:block font-bold">
                    <a href="tel:+8801980114434" className="hover:text-gray-200">
                        +8801980-114434
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;