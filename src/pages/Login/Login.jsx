import { useState } from "react";
import login from '../../assets/login.png';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="flex md:flex-row flex-col-reverse">
            <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center items-center p-8 md:p-10">
                <form className="w-full max-w-md bg-white p-8 rounded-lg border shadow-lg">
                    <div className="flex justify-center mb-6">
                        <h2 className="text-xl font-semibold text-alpha">E-Shop Fashion</h2>
                    </div>
                    <h2 className="text-2xl font-bold text-center mb-6">Hello there!</h2>
                    <p className="text-center mb-6">Enter Your Username and Password to login</p>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Email</label>
                        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required className="w-full p-2 border rounded" placeholder="Enter Your Email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Password</label>
                        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required className="w-full p-2 border rounded" placeholder="Enter Your Password" />
                    </div>
                    <button className="w-full p-2 text-white bg-alpha hover:bg-beta rounded-xl">Login</button>
                </form>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center py-4">
                    <img src={login} alt="login" className="w-full h-full" />
                </div>
        </div>
    );
};

export default Login;