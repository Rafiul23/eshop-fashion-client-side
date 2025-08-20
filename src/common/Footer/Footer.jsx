import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="pt-12 w-full bg-[#000033] text-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-0">
                {/* newslatter form */}
                <div>
                    <h3 className="text-lg mb-4">Newslatter</h3>
                    <p className="mb-4">
                        Be the first to hear about new products, exclusive events, and online offers.
                    </p>
                    <p className="font-medium text-sm">Sign up and get 10% off your first order.</p>

                    <form className="flex mt-4">
                        <input type="email" name="" placeholder="Enter Your Email" className="p-3 w-full text-sm border-t border-l border-b border-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all" required />

                        <button className="bg-alpha text-white px-4 py-3 rounded-r-md hover:bg-beta transition-all">Subscribe</button>
                    </form>
                </div>

                {/* shop links */}
                <div>
                    <h3 className="text-lg mb-4">Shop</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-alpha transition-colors">
                            <Link to='/'>Men's Top wear</Link>
                        </li>
                        <li className="hover:text-alpha transition-colors">
                            <Link to='/'>Women's Top wear</Link>
                        </li>
                        <li className="hover:text-alpha transition-colors">
                            <Link to='/'>Men's Bottom wear</Link>
                        </li>
                        <li className="hover:text-alpha transition-colors">
                            <Link to='/'>Women's Bottom wear</Link>
                        </li>
                    </ul>
                </div>

                {/* Support links */}
                 <div>
                    <h3 className="text-lg mb-4">Support</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-alpha transition-colors">
                            <Link to='/'>Contact Us</Link>
                        </li>
                        <li className="hover:text-alpha transition-colors">
                            <Link to='/'>About Us</Link>
                        </li>
                        <li className="hover:text-alpha transition-colors">
                            <Link to='/'>FAQs</Link>
                        </li>
                        <li className="hover:text-alpha transition-colors">
                            <Link to='/'>Featurs</Link>
                        </li>
                    </ul>
                </div>

                {/* follow us */}
                <div>
                    <h3 className="text-lg mb-4">Follow Us</h3>
                    <div className="flex items-center gap-4 mb-4">
                        <a href="https://www.facebook.com" target="_blank" className="hover:text-alpha">
                        <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" className="hover:text-alpha">
                        <FaInstagram />
                        </a>
                        <a href="https://www.x.com" target="_blank" className="hover:text-alpha">
                        <FaXTwitter />
                        </a>
                    </div>

                    <p className="my-2">Call Us</p>
                    <a href="tel:+8801980114434" className="mt-1">
                        <FaPhoneAlt className="inline-block mr-2"/>
                        +8801980-114434
                    </a>
                </div>

            </div>

            <div className="container mx-auto mt-6 text-center border-t border-gray-200 py-6">
                @ 2025, All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;