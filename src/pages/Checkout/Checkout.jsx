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

  return <div></div>;
};

export default Checkout;
