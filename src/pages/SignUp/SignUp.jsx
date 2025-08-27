import { Link } from "react-router";
import signup from "../../assets/signup.png";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

const SignUp = () => {

    const [isHidden, setIsHidden] = useState(true);
  
  const handleSignUp = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);
  }

  return (
    <div className="flex md:flex-row-reverse flex-col-reverse">
      <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center items-center p-8 md:p-10 relative">
        <form onSubmit={handleSignUp} className="w-full max-w-md bg-white p-8 rounded-lg border shadow-lg">
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-semibold text-alpha">E-Shop Fashion</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Hello there!</h2>
          <p className="text-center mb-6">
            Enter Your Name, Email and <br /> Password to Sign Up
          </p>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              name='name'
              required
              className="w-full p-2 border rounded"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 border rounded"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type={ isHidden ? "password" : "text"}
              name="password"
              required
              className="w-full p-2 border rounded"
              placeholder="Enter Your Password"
            />
          </div>
          <button className="w-full p-2 text-white bg-alpha hover:bg-beta rounded-xl">
            Sign Up
          </button>
          <p className="mt-6 text-center">
            Already have an account? Please!{" "}
            <Link className="text-alpha underline font-bold" to="/login">
              Login
            </Link>
          </p>
        </form>
        <div className="absolute bottom-[182px] right-[165px]">
            <button onClick={()=> setIsHidden(!isHidden)}>
                {
                    isHidden ? <IoMdEye /> : <IoMdEyeOff />
                }
            </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center py-4">
        <img src={signup} alt="signup" className="w-full h-full" />
      </div>
    </div>
  );
};

export default SignUp;
