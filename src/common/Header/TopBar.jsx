import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TopBar = () => {
    return (
        <div className="bg-[#ff084a] py-3 text-white">
            <div className="container mx-auto">
                <div className="flex gap-3">
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
            </div>
        </div>
    );
};

export default TopBar;