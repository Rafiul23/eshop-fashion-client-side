import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { IoMdCloseCircle } from "react-icons/io";

const SearchBar = () => {
    const [searchForm, setSearchForm] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    
  return (
    <div className={`flex justify-center items-center w-full transition-all duration-300 ${isOpen ? 'absolute top-0 left-0 w-full bg-white h-24 z-50' : 'w-auto'}`}>
        {
        isOpen ? (<form className="relative flex justify-center items-center w-full">
        <div className="relative w-1/2 flex justify-center items-center gap-4">
            <input type="text" placeholder="Type here..." value={searchForm} className="bg-gray-100 px-4 py-2 pl-3 pr-12 rounded-xl focus:outline-none w-full placeholder:text-gray-700"/>
            <button type="submit">
                <GoSearch className="text-gray-700 hover:text-alpha text-3xl"/>
            </button>
        </div>
        <button onClick={()=> setIsOpen(!isOpen)}><IoMdCloseCircle className="text-red-700 text-3xl absolute -top-4 right-4"/></button>
        </form>) : (<button onClick={()=> setIsOpen(!isOpen)}>
      <GoSearch className=" text-gray-700 text-3xl hover:text-alpha" />
    </button>)
    }
    </div>
  );
};

export default SearchBar;
