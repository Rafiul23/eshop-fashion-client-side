import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="border-t py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-4 lg:px-0">
                {/* newslatter form */}
                <div>
                    <h3 className="text-lg text-gray-800 mb-4">Newslatter</h3>
                    <p className="text-gray-500 mb-4">
                        Be the first to hear about new products, exclusive events, and online offers.
                    </p>
                    <p className="font-medium text-sm text-gray-600">Sign up and get 10% off your first order.</p>

                    <form className="flex mt-4">
                        <input type="email" name="" placeholder="Enter Your Email" className="p-3 w-full text-sm border-t border-l border-b border-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all" required />

                        <button className="bg-alpha text-white px-4 py-3 rounded-r-md hover:bg-beta transition-all">Subscribe</button>
                    </form>
                </div>

                {/* shop links */}
                <div>
                    <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li className="hover:text-gray-600 transition-colors">
                            <Link to='/'>Men's Top wear</Link>
                        </li>
                        <li className="hover:text-gray-600 transition-colors">
                            <Link to='/'>Women's Top wear</Link>
                        </li>
                        <li className="hover:text-gray-600 transition-colors">
                            <Link to='/'>Men's Bottom wear</Link>
                        </li>
                        <li className="hover:text-gray-600 transition-colors">
                            <Link to='/'>Women's Bottom wear</Link>
                        </li>
                    </ul>
                </div>

                {/* Support links */}
                 <div>
                    <h3 className="text-lg text-gray-800 mb-4">Support</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li className="hover:text-gray-600 transition-colors">
                            <Link to='/'>Contact Us</Link>
                        </li>
                        <li className="hover:text-gray-600 transition-colors">
                            <Link to='/'>About Us</Link>
                        </li>
                        <li className="hover:text-gray-600 transition-colors">
                            <Link to='/'>FAQs</Link>
                        </li>
                        <li className="hover:text-gray-600 transition-colors">
                            <Link to='/'>Featurs</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;