import { useEffect, useState } from "react";
import ProductGrid from "./ProductGrid";


const WomenTop = () => {
  const [placeholderProducts, setPlaceholderProducts] = useState([]);

  useEffect(()=> {
    fetch('/public/products.json')
    .then(res => res.json())
    .then(data => setPlaceholderProducts(data))
  }, []);
  
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
