import bannerImg from '../../src/assets/banner.png';

const Hero = () => {
    return (
        <div className="min-h-[400px] bg-gradient-to-br from-violet-700 to-alpha">
            <div className="container mx-auto md:px-4 flex justify-between items-center md:gap-4 max-md:flex-col-reverse">
                <div className="w-full pb-5 md:text-left text-center md:w-1/2 space-y-5">
                    <h2 className='text-white lg:text-5xl md:text-4xl text-3xl font-bold'>Style That Speaks for You!</h2>
                    <p className='text-white text-xl font-semibold'>Discover the latest trends and timeless <br /> classics—crafted for comfort, designed <br /> for confidence.</p>
                    <button className='bg-alpha text-white hover:bg-beta px-6 py-4 rounded-xl font-medium transition-all shadow-xl'>Get Started</button>
                </div>
                <div className="w-full md:w-1/2 md:my-[100px] my-[50px] flex justify-center items-center">
                <img src={bannerImg} className=' w-[300px] h-[300px] bg-beta rounded-full' alt='banner image' />
                </div>
            </div>
        </div>
    );
};

export default Hero;