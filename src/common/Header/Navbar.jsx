import { Link } from "react-router";
import { FaRegUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import SearchBar from "../../components/SearchBar";
import CartDrawer from "../../components/Layouts/CartDrawer";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";


const Navbar = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div>
            <Link to='/' className="text-alpha text-2xl font-bold">E-Shop Fashion</Link>
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
            <button onClick={()=> setNavDrawerOpen(!navDrawerOpen)} className="md:hidden"><AiOutlineMenu className="text-gray-700 text-xl" /></button>
        </div>
      </nav>
      <CartDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <div className={`fixed top-0 left-0 w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
      
      <div className="flex justify-end p-4">
        <button onClick={()=> setNavDrawerOpen(!navDrawerOpen)}>
          <IoMdCloseCircle className="text-red-700 text-3xl"/>
        </button>
      </div>

      <div className="p-4 uppercase">
        <h2 className="text-xl font-semibold mb-4">Menu</h2>
        <nav>
          <Link to='/' onClick={()=> setNavDrawerOpen(!navDrawerOpen)} className="block text-gray-600 hover:text-alpha border-b mb-4">Men</Link>
          <Link to='/' onClick={()=> setNavDrawerOpen(!navDrawerOpen)} className="block text-gray-600 hover:text-alpha border-b mb-4">Women</Link>
          <Link to='/' onClick={()=> setNavDrawerOpen(!navDrawerOpen)} className="block text-gray-600 hover:text-alpha border-b mb-4">Top Wear</Link>
          <Link to='/' onClick={()=> setNavDrawerOpen(!navDrawerOpen)} className="block text-gray-600 hover:text-alpha border-b mb-4">Bottom Wear</Link>
        </nav>
      </div>

      </div>
    </div>
  );
};

export default Navbar;
