import ProductGrid from "./ProductGrid";

const placeholderProducts = [
  {
    _id: 1,
    name: 'Product 1',
    price: 100,
    image: "https://picsum.photos/200?random=1"
  },
  {
    _id: 2,
    name: 'Product 2',
    price: 100,
    image: "https://picsum.photos/200?random=2"
  },
  {
    _id: 3,
    name: 'Product 3',
    price: 100,
    image: "https://picsum.photos/200?random=3"
  },
  {
    _id: 4,
    name: 'Product 4',
    price: 100,
    image: "https://picsum.photos/200?random=4"
  },
  {
    _id: 5,
    name: 'Product 5',
    price: 100,
    image: "https://picsum.photos/200?random=5"
  },
  {
    _id: 6,
    name: 'Product 6',
    price: 100,
    image: "https://picsum.photos/200?random=6"
  },
  {
    _id: 7,
    name: 'Product 7',
    price: 100,
    image: "https://picsum.photos/200?random=7"
  },
  {
    _id: 8,
    name: 'Product 8',
    price: 100,
    image: "https://picsum.photos/200?random=8"
  },
 ];

const WomenTop = () => {
  return (
    <div className="py-20">
      <h2 className="lg:text-5xl md:text-4xl text-3xl text-alpha font-bold text-center py-4">
        Top wear for Women
      </h2>

      <div className="container mx-auto">
        <ProductGrid
        products={placeholderProducts}
        ></ProductGrid>
      </div>
    </div>
  );
};

export default WomenTop;
