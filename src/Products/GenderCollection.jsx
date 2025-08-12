import menCollectionImg from '../assets/male.png';
import womenCollectionImg from '../assets/female.png';
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa";

const GenderCollection = () => {
    return (
        <div className="py-10">
            <h2 className="lg:text-5xl md:text-4xl text-3xl text-alpha font-bold text-center py-4">Shop by Style, Made for You</h2>
            <p className="text-xl font-medium text-gray-600 text-center mb-4">Explore our men’s and women’s collections—curated to match your unique vibe.</p>

            <div className='container mx-auto flex flex-col md:flex-row gap-6 '>
              <div className='relative flex-1'>
                <img src={menCollectionImg} alt="menCollectionImg" className='w-full h-[400px] lg:h-[500px]' />
                <div className='absolute bottom-4 left-4 bg-white opacity-80 py-4 px-6'>
                    <Link to='/'>
                    <h2 className='text-2xl font-bold text-gray-600 hover:text-alpha'>
                        Men's Collection
                    <FaArrowRight className='inline-block ml-2'/>
                    </h2>
                    </Link>
                </div>
              </div>
              <div className='relative flex-1'>
                <img src={womenCollectionImg} alt="womenCollectionImg" className='w-full h-[400px] lg:h-[500px]' />
                <div className='absolute bottom-4 left-4 bg-white opacity-80 py-4 px-6'>
                    <Link to='/'>
                    <h2 className='text-2xl font-bold text-gray-600 hover:text-alpha'>
                        Women's Collection
                        <FaArrowRight  className='inline-block ml-2'/>
                    </h2>
                    </Link>
                </div>
              </div>
            </div>
        </div>
    );
};

export default GenderCollection;