import { IoMdCloseCircle } from "react-icons/io";
import CartContent from "./CartContent";


const CartDrawer = ({isDrawerOpen, setIsDrawerOpen}) => {
  

  return <div className={`fixed top-0 right-0 w-11/12 md:w-1/2 lg:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}>
    <div className="flex justify-end p-4">
      <button onClick={()=> setIsDrawerOpen(!isDrawerOpen)}>
        <IoMdCloseCircle className="text-red-700 text-3xl" />
      </button>
    </div>

    <div className="flex-grow p-4 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <CartContent />   
    </div>
    
    <div className="p-4 bg-white sticky bottom-0">
      <button className="bg-alpha text-white w-full font-medium hover:bg-[#ff2f67] rounded-lg transition py-2">Checkout</button>
      <p className="mt-2 text-gray-600 text-center">Shipping, taxes, and discount codes calculated at checkout</p>
    </div>
  </div>;
};

export default CartDrawer;
