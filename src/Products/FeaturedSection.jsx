import { HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";

const FeaturedSection = () => {
    return (
        <div className="py-20 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* f-1 */}
            <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-4">
                    <HiShoppingBag className="text-xl"></HiShoppingBag>
                </div>
                <h4 className="tracking-tighter mb-4">
                    FREE INTERNATIONAL SHIPPING
                </h4>
                <p className="text-gray-600 text-sm tracking-tighter">
                    On all orders over $100
                </p>
            </div>

            {/* f-2 */}
            <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-4">
                    <HiArrowPathRoundedSquare className="text-xl"></HiArrowPathRoundedSquare>
                </div>
                <h4 className="tracking-tighter mb-4">
                    45 DAYS RETURN
                </h4>
                <p className="text-gray-600 text-sm tracking-tighter">
                    Money back guarantee
                </p>
            </div>

            {/* f-3 */}
            <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-4">
                    <HiOutlineCreditCard className="text-xl"></HiOutlineCreditCard>
                </div>
                <h4 className="tracking-tighter mb-4">
                    SECURE CHECKOUT
                </h4>
                <p className="text-gray-600 text-sm tracking-tighter">
                    100% secured checkout process
                </p>
            </div>

            </div>
        </div>
    );
};

export default FeaturedSection;