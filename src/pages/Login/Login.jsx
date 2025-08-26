import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="flex">
            <div className="w-full md:w-1/2 flex-col justify-center items-center p-8 md:p-12">
                <form className="w-full max-w-md bg-white p-8 rounded-lg border shadow-lg">
                    <div className="flex justify-center mb-6">
                        <h2 className="text-xl font-semibold text-alpha">E-Shop Fashion</h2>
                    </div>
                    <h2 className="text-2xl font-bold text-center mb-6">Hello there!</h2>
                    <p className="text-center mb-6">Enter Your Username and Password to login</p>
                </form>
            </div>
        </div>
    );
};

export default Login;