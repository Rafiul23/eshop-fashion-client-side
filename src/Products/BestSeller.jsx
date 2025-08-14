import { useEffect, useState } from "react";
import { BsCart } from "react-icons/bs";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This is a stylish jacket perfect for any occasion.",
  brand: "FashionBrand",
  material: "Lather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/200?random=1",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/200?random=2",
      altText: "Stylish Jacket 2",
    },
  ],
};

const BestSeller = () => {

    const [mainImage, setMainImage] = useState('');

    useEffect(()=> {
        if(selectedProduct?.images?.length > 0){
            setMainImage(selectedProduct.images[0].url);
        }
    }, [])

  return (
    <div className="py-20">
      <h2 className="lg:text-5xl md:text-4xl text-3xl text-alpha font-bold text-center py-4">
        Our Best Sellers
      </h2>
      <p className="text-xl font-medium text-gray-600 text-center mb-4">
        Discover the most-loved picks our customers can’t get enough of.
      </p>

      <div className="p-6">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
          <div className="flex flex-col md:flex-row">
            {/* first thumbnail */}
            <div className="hidden md:flex flex-col space-y-4 mr-6">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                  src={image.url}
                  alt={image.altText}
                  onClick={() => setMainImage(image.url)}
                />
              ))}
            </div>

            {/* main image */}
            <div className="md:w-1/2">
              <div className="mb-4">
                <img
                  src={mainImage}
                  alt={selectedProduct.images[0]?.altText}
                  className="w-full object-cover h-auto rounded-lg"
                />
              </div>
            </div>

            {/* mobile thumbnail */}
            <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                  src={image.url}
                  alt={image.altText}
                />
              ))}
            </div>

            {/* right side */}
            <div className="md:w-1/2 md:ml-10">
              <h1 className="text-2xl md:text-3xl text-gray-700 font-semibold mb-2">
                {selectedProduct.name}
              </h1>
              <p className="text-lg text-gray-600 mb-2">
                {selectedProduct.description}
              </p>
              <p className="text-lg text-gray-600 mb-2">
                {selectedProduct.originalPrice &&
                  `${selectedProduct.originalPrice}`}
              </p>
              <p className="text-lg text-gray-600 mb-2">
                $ {selectedProduct.price}
              </p>

              <div className="mb-4">
                <p className="text-gray-700">Color:</p>
                <div className="flex gap-2 mt-2">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color}
                      className="w-8 h-8 rounded-full border"
                      style={{
                        backgroundColor: color.toLocaleLowerCase(),
                        filter: "brightness(0.5)",
                      }}
                    ></button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-lg text-gray-700">Sizes:</p>
                <div className="flex gap-2 mt-2">
                  {selectedProduct.sizes.map((size) => (
                    <button key={size} className="px-4 py-2 rounded border">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 text-xl">Quantity:</p>
                <div className="flex items-center gap-4 mt-2">
                  <button className="px-2 bg-gray-200 rounded text-lg cursor-pointer">+</button>
                  <span className="text-lg">1</span>
                  <button className="px-2 bg-gray-200 rounded text-lg cursor-pointer">-</button>
                </div>
              </div>

              <button className="bg-alpha hover:bg-beta text-white px-4 py-2 rounded-lg w-full">Add to Cart <BsCart className="inline-block ml-2"/></button>

              <div className="mt-10 text-gray-700">
                  <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
                  <table className="w-full text-sm text-gray-600">
                    <tbody>
                        <tr className="border">
                            <td className="py-1 pl-1">Brand:</td>
                            <td className="py-1">{selectedProduct.brand}</td>
                        </tr>
                        <tr className="border">
                            <td className="py-1 pl-1">Material:</td>
                            <td className="py-1">{selectedProduct.material}</td>
                        </tr>
                    </tbody>
                  </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
