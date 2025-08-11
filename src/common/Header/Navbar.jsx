import { Link } from "react-router";
import { FaRegUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import SearchBar from "../../components/SearchBar";
import CartDrawer from "../../components/Layouts/CartDrawer";
import { useState } from "react";

const Navbar = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div>
            <Link to='/' className="text-alpha font-bold">E-Shop Fashion</Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
            <Link to='/' className="text-gray-700 hover:text-alpha font-medium uppercase">Men</Link>
            <Link to='/' className="text-gray-700 hover:text-alpha font-medium uppercase">Women</Link>
            <Link to='/' className="text-gray-700 hover:text-alpha font-medium uppercase">Top Wear</Link>
            <Link to='/' className="text-gray-700 hover:text-alpha font-medium uppercase">Bottom Wear</Link>
        </div>
        <div className="flex items-center gap-6">
            <Link to='/profile' >
            <FaRegUser className="hover:text-alpha w-6 h-6 text-gray-700" />
            </Link>
            <button className="relative" onClick={()=> setIsDrawerOpen(!isDrawerOpen)}>
            <BsCart className="hover:text-alpha h-6 w-6 text-gray-700" />
            <span className="absolute bg-alpha text-white text-xs rounded-full px-1 py-0.5 -top-2 -right-4">4+</span>
            </button>
            <div className="overflow-hidden">
              <SearchBar />
            </div>
            <button className="md:hidden"><AiOutlineMenu className="text-gray-700 text-xl" /></button>
        </div>
      </nav>
      <CartDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    </div>
  );
};

export default Navbar;
