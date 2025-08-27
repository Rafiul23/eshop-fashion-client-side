import login from "../../assets/login.png";
import { Link } from "react-router";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

const Login = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
  };

  return (
    <div className="flex md:flex-row flex-col-reverse">
      <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center items-center p-8 md:p-10 relative">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-lg"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-semibold text-alpha">E-Shop Fashion</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Hello there!</h2>
          <p className="text-center mb-6">
            Enter Your Email and Password to Login
          </p>
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
              type={isHidden ? "password" : "text"}
              name="password"
              required
              className="w-full p-2 border rounded"
              placeholder="Enter Your Password"
            />
          </div>
          <button className="w-full p-2 text-white bg-alpha hover:bg-beta rounded-xl">
            Login
          </button>
          <p className="mt-6 text-center">
            New on E-Shop Fashion? Please!{" "}
            <Link className="text-alpha underline font-bold" to="/signup">
              Sign Up
            </Link>
          </p>
        </form>
        <div className="absolute bottom-[255px] right-[165px]">
          <button onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? <IoMdEye /> : <IoMdEyeOff />}
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center py-4">
        <img src={login} alt="login" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Login;
