import { Link } from "react-router";

const ProductGrid = ({similarProducts}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                similarProducts.map((product, i)=>
                (
                    <Link key={i} to={`/product/${product._id}`} className="block">
                        <div className="bg-white p-4 rounded-lg">

                        </div>
                    </Link>
                )
                )
            }
        </div>
    );
};

export default ProductGrid;