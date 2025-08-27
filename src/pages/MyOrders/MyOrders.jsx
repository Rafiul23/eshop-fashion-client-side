import { useEffect, useState } from "react";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(()=> {
        setTimeout(()=>{
            const mockOrders = [
                {
                    _id: '1234',
                    createAt: new Date(),
                    shippingAddress: {city: "New York", country: "USA"},
                    orderItems: [
                        {
                            name: 'Product 1',
                            image: "https://picsum.photos/500/500?random=1"
                        }
                    ],
                    totalPrice: 100,
                    isPaid: true 
                },
                {
                    _id: '1235',
                    createAt: new Date(),
                    shippingAddress: {city: "New York", country: "USA"},
                    orderItems: [
                        {
                            name: 'Product 2',
                            image: "https://picsum.photos/500/500?random=2"
                        }
                    ],
                    totalPrice: 120,
                    isPaid: false 
                },
            ];
            setOrders(mockOrders);
        }, 1000)
    }, [])
    return (
        <div className="max-w-7xl mx-auto md:p-4 p-6">
            <h2 className="text-2xl md:text-xl font-bold mb-6">My Orders</h2>
            <div className="relative shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full text-left text-gray-500">
                    <thead className="bg-gray-100 text-sm uppercase text-gray-700">
                        <tr>
                            <th className="px-3 md:py-4 py-2">Image</th>
                            <th className="px-3 md:py-4 py-2">Order ID</th>
                            <th className="px-3 md:py-4 py-2">Created</th>
                            <th className="px-3 md:py-4 py-2">Shipping Address</th>
                            <th className="px-3 md:py-4 py-2">Items</th>
                            <th className="px-3 md:py-4 py-2">Price</th>
                            <th className="px-3 md:py-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.length > 0 ? (
                                orders.map(order => (
                                    <tr key={order._id} className="border-b hover:border-gray-500 cursor-pointer">
                                        <td className="p-4 md:p-2">
                                            <img src={order?.orderItems[0].image} alt={order?.orderItems[0].name} className="w-10 h-10 object-cover rounded-lg" />
                                        </td>
                                        <td className="p-4 md:p-2 font-medium text-gray-900 whitespace-nowrap">
                                            #{order._id}
                                        </td>
                                        <td className="p-4 md:p-2">
                                            {new Date(order.createAt).toLocaleDateString()} {""}
                                            {new Date(order.createAt).toLocaleTimeString()}
                                        </td>
                                        <td className="p-4 md:p-2">
                                            {
                                                order.shippingAddress ? `${order.shippingAddress.city}, ${order.shippingAddress.country}` : "N/A"
                                            }
                                        </td>
                                        <td className="p-4 md:p-2">
                                            {
                                                order.orderItems.length
                                            }
                                        </td>
                                        <td className="p-4 md:p-2">
                                            ${order.totalPrice}
                                        </td>
                                        <td className="p-4 md:p-2">
                                            <span className={`${order.isPaid ? "bg-green-50 text-green-500" :
                                                "bg-red-50 text-red-700"
                                            } p-2 rounded`}>
                                                {order.isPaid ? "Paid" : "Pending"}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="p-4 text-center text-gray-500">
                                        You have no orders
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;