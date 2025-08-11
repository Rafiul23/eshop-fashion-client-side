import { IoMdCloseCircle } from "react-icons/io";


const CartDrawer = ({isDrawerOpen, setIsDrawerOpen}) => {
  

  return <div className={`fixed top-0 right-0 w-3/4 md:w-1/4 sm:w1/2 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}>
    <div className="flex justify-end p-4">
      <button onClick={()=> setIsDrawerOpen(!isDrawerOpen)}>
        <IoMdCloseCircle className="text-red-700 text-3xl" />
      </button>
    </div>
  </div>;
};

export default CartDrawer;
