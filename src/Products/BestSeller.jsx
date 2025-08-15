import { useEffect, useState } from "react";
import { BsCart } from "react-icons/bs";
import Swal from "sweetalert2";
import ProductGrid from "./ProductGrid";

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

 const similarProducts = [
  {
    _id: 1,
    name: 'Product 1',
    price: 100,
    image: "https://picsum.photos/200?random=3"
  },
  {
    _id: 2,
    name: 'Product 2',
    price: 100,
    image: "https://picsum.photos/200?random=4"
  },
  {
    _id: 3,
    name: 'Product 3',
    price: 100,
    image: "https://picsum.photos/200?random=5"
  },
  {
    _id: 4,
    name: 'Product 4',
    price: 100,
    image: "https://picsum.photos/200?random=6"
  }
 ];

const BestSeller = () => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, []);

  const handleQuantity = (action) => {
    if (action === "plus") {
      setQuantity(quantity + 1);
    }
    if (action === "minus" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer:
          '<a href="#">Please, select the size and color before adding to cart.</a>',
      });
      return;
    }
    setIsButtonDisabled(true);

    setTimeout(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your product is added to cart successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      setIsButtonDisabled(false);
    }, 500);
  };

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
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    mainImage === image.url ? "border-black" : "border-gray-400"
                  }`}
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
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    mainImage === image.url ? "border-black" : "border-gray-400"
                  }`}
                  src={image.url}
                  alt={image.altText}
                  onClick={() => setMainImage(image.url)}
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
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border ${
                        selectedColor === color
                          ? "border-4 border-alpha"
                          : "border-gray-400"
                      }`}
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
                    <button
                      onClick={() => setSelectedSize(size)}
                      key={size}
                      className={`px-4 py-2 rounded border ${
                        selectedSize === size
                          ? "bg-alpha text-white border-4 border-black"
                          : ""
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 text-xl">Quantity:</p>
                <div className="flex items-center gap-4 mt-2">
                  <button
                    onClick={() => handleQuantity("plus")}
                    className="px-2 bg-gray-200 rounded text-lg cursor-pointer"
                  >
                    +
                  </button>
                  <span className="text-lg">{quantity}</span>
                  <button
                    onClick={() => handleQuantity("minus")}
                    className="px-2 bg-gray-200 rounded text-lg cursor-pointer"
                  >
                    -
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={isButtonDisabled}
                className={`bg-alpha hover:bg-beta text-white px-4 py-2 rounded-lg w-full ${
                  isButtonDisabled
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-beta"
                }`}
              >
                {isButtonDisabled ? "Adding ..." : "Add to Cart"}
              </button>

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

        {/* you may like */}
        <div className="mt-20">
          <h2 className="lg:text-5xl md:text-4xl text-3xl text-alpha font-bold text-center py-4">
            You May Like
          </h2>
          <ProductGrid products={similarProducts}></ProductGrid>
        </div>

      </div>
    </div>
  );
};

export default BestSeller;
