import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router";

const newArrivals = [
  {
    _id: 1,
    name: "Stylish Jacket",
    price: 120,
    image: "https://picsum.photos/200?random=1",
  },
  {
    _id: 2,
    name: "Stylish Jacket",
    price: 120,
    image: "https://picsum.photos/200?random=2",
  },
  {
    _id: 3,
    name: "Stylish Jacket",
    price: 120,
    image: "https://picsum.photos/200?random=3",
  },
  {
    _id: 4,
    name: "Stylish Jacket",
    price: 120,
    image: "https://picsum.photos/200?random=4",
  },
  {
    _id: 5,
    name: "Stylish Jacket",
    price: 120,
    image: "https://picsum.photos/200?random=5",
  },
  {
    _id: 6,
    name: "Stylish Jacket",
    price: 120,
    image: "https://picsum.photos/200?random=6",
  },
  {
    _id: 7,
    name: "Stylish Jacket",
    price: 120,
    image: "https://picsum.photos/200?random=7",
  },
];

const NewArrival = () => {
  return (
    <div className="py-10">
      <h2 className="lg:text-5xl md:text-4xl text-3xl text-alpha font-bold text-center py-4">
        Fresh Finds, Just In
      </h2>
      <p className="text-xl font-medium text-gray-600 text-center mb-4">
        Be the first to wear the latest trends—new styles added for your next
        wardrobe refresh.
      </p>

      <div className="container mx-auto">
        <Swiper
          
          spaceBetween={30}
          autoplay={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {newArrivals.map((product) => (
            <SwiperSlide key={product._id}>
              <div className="relative">
                <img
                src={product.image}
                className="w-full my-10"
                alt={product.name}
              />
              <Link to={`/product/${product._id}`}>
              <div className="px-4 py-2 text-alpha bg-white rounded absolute bottom-4 left-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="font-medium">Price: {product.price}</p>
              </div>
              </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrival;
