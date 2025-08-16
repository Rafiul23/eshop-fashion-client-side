import { Link } from "react-router";

const FeaturedCollection = () => {
    return (
        <section className="py-10 px-4 lg:px-0">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-rose-100 rounded-2xl">
            {/* left content */}

            <div className="lg:w-1/2 w-full p-8 text-center lg:text-left">
                <h2 className="text-lg font-semibold text-rose-500 mb-4">
                    Featured Collection
                </h2>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                    Style crafted for your everyday moments
                </h2>
                <p className="text-lg text-gray-600 mb-6 font-medium">
                    Discover our handpicked favorites, crafted to bring style, quality, and elegance to your everyday.
                </p>
                <Link to='/collection/all'>
                <button className="bg-alpha text-white hover:bg-beta px-6 py-4 rounded-xl font-medium transition-all shadow-xl">
                    Shop Now
                </button>
                </Link>
            </div>
            </div>
        </section>
    );
};

export default FeaturedCollection;