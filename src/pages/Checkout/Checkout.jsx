import { useState } from 'react';
import { useNavigate } from 'react-router';

const Checkout = () => {
  const cart = {
    products: [
      {
        _id: 1,
        name: "Stylish Jacket",
        size: "M",
        color: "Black",
        price: 120,
        image: "https://picsum.photos/200?random=1",
      },
      {
        _id: 2,
        name: "Stylish Jacket",
        size: "L",
        color: "Red",
        price: 120,
        image: "https://picsum.photos/200?random=2",
      }
    ],
    totalPrice: 240
  };

  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: ""
  });

  return <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
    {/* left section */}
    <div className='bg-white p-6 rounded-lg'>
      <h2 className='text-2xl uppercase mb-6'>Checkout</h2>
      <form>
        <h3 className=''></h3>
      </form>
    </div>
  </div>;
};

export default Checkout;
