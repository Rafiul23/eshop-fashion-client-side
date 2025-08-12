
const Footer = () => {
    return (
        <footer className="border-t py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-4 lg:px-0">
                <div className="">
                    <h3 className="text-lg text-gray-800 mb-4">Newslatter</h3>
                    <p className="text-gray-500 mb-4">
                        Be the first to hear about new products, exclusive events, and online offers.
                    </p>
                    <p>Sign up and get 10% off your first order.</p>

                    <form className="flex">
                        <input type="email" name="" placeholder="Enter Your Email" className="p-3 w-full text-sm border-t border-l border-b border-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all" required />

                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;