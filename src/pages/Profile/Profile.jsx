import MyOrders from "../MyOrders/MyOrders";

const Profile = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow container mx-auto p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                    {/* left side */}
                    <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Alex Henry
                        </h2>
                        <p className="text-lg text-gray-600 mb-4">henry24@gmail.com</p>
                        <button className="w-full bg-alpha text-white hover:bg-beta px-4 py-2 rounded">Logout</button>
                    </div>
                    {/* right side */}
                    <div className="w-full md:w-2/3 lg:w-3/4">
                    <MyOrders></MyOrders>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;