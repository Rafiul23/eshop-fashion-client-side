import { Link } from "react-router";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:p-10 p-4">
      {products.map((product, i) => (
        <Link key={i} to={`/product/${product._id}`} className="block">
          <div className="bg-white p-4 rounded-lg">
            <div className="w-full h-96 mb-4">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={product.image}
                alt={product.name}
              />
            </div>
            <h3 className="text-sm mb-2">
              {product.name}
              <p className="text-gray-500 font-medium text-sm">
                $ {product.price}
              </p>
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
