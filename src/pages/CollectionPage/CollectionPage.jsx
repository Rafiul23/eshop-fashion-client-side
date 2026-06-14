import { useEffect, useState } from "react";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/public/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  
  return <div>

  </div>;
};

export default CollectionPage;
