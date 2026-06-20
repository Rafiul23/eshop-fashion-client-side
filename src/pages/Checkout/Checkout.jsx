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
        <h3 className='text-lg mb-4'>Cntact Details</h3>
        <div className='mb-4'>
        <label className='block text-gray-700 mb-2'>Email</label>
        <input type="email" name="" value={"user@example.com"} className='w-full p-2 border rounded' id="" />
        </div>
        <div className=''>
          <h3 className='text-lg mb-4'>Delivary</h3>
          <div className='mb-4 grid grid-cols-2 gap-4'>
            <div>
              <label className='block text-gray-700 mb-2'>First Name:</label>
              <input type="text" onChange={(e)=> setShippingAddress({...shippingAddress, firstName: e.target.value})} name="" value={"Alex"} className='w-full p-2 border rounded' required id="" />
            </div>
            <div>
              <label className='block text-gray-700 mb-2'>Last Name:</label>
              <input type="text" onChange={(e)=> setShippingAddress({...shippingAddress, lastName: e.target.value})} name="" value={"Gooth"} className='w-full p-2 border rounded' required id="" />
            </div>
          </div>
            <div className='mb-4'>
              <label className='block text-gray-700 mb-2'>Address:</label>
              <input type="text" name="" onChange={(e)=> setShippingAddress({...shippingAddress, address: e.target.value})} value={shippingAddress.address} className='w-full p-2 border rounded' required id="" />
            </div>
            <div className='mb-4 grid grid-cols-2 gap-4'>
      
            </div>
        </div>
      </form>
    </div>
  </div>;
};

export default Checkout;
