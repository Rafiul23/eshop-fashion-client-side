import { FaRegTrashAlt } from "react-icons/fa";

const CartContent = () => {

    const cartProducts = [
        {
            _id: 1,
            name: "T-Shirt",
            size: "M",
            color: "Red",
            quantity: 1,
            price: 15,
            image: "https://picsum.photos/200?random=1"
        },
        {
            _id: 2,
            name: "Jeans",
            size: "L",
            color: "Blue",
            quantity: 1,
            price: 25,
            image: "https://picsum.photos/200?random=1"
        }
    ]

    return (
        <div>
            {
                cartProducts.map((product, i) => <div key={i} className="flex items-start justify-between py-4 gap-2 border-b">
                    <div className="flex items-start">
                        <img src={product.image} alt={product.name} className="w-20 h-20 object-cover mr-4 rounded" />
                        <div>
                            <h3>{product.name}</h3>
                            <p className="text-sm text-gray-600">
                                size: {product.size} | color: {product.color}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                                <button className="border rounded px-2 text-lg font-medium">+</button>
                                <span className="mx-2">{product.quantity}</span>
                                <button className="border rounded px-2 text-lg font-medium">-</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <p>Price: ${product.price}</p>
                        <button>
                            <FaRegTrashAlt className="w-6 h-6 text-red-600"/>
                        </button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CartContent;