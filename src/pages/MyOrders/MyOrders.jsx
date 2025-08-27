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
                    isPaid: true 
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

                </table>
            </div>
        </div>
    );
};

export default MyOrders;