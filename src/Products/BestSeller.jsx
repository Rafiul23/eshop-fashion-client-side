

const selectedroduct = 
    {
        name: 'Stylish Jacket',
        price: 120,
        originalPrice: 150,
        description: 'This is a stylish jacket perfect for any occasion.',
        brand: 'FashionBrand',
        material: 'Lather',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Red', 'Black'],
        images: [
            {
                url: 'https://picsum.photos/200?random=1',
                altText: 'Stylish Jacket 1'
            },
            {
                url: 'https://picsum.photos/200?random=2',
                altText: 'Stylish Jacket 2'
            },
        ]
    }



const BestSeller = () => {
    return (
        <div className="py-20">
            <h2 className="lg:text-5xl md:text-4xl text-3xl text-alpha font-bold text-center py-4">Our Best Sellers</h2>
            <p className="text-xl font-medium text-gray-600 text-center mb-4">Discover the most-loved picks our customers can’t get enough of.</p>

            <div className="p-6">
                <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
                    <div className="flex flex-col md:flex-row">
                    {/* first thumbnail */}
                    <div className="hidden md:flex flex-col space-y-4 mr-6">
                        {
                            selectedroduct.images.map((image, index)=>
                            <img key={index} className="w-20 h-20 object-cover rounded-lg cursor-pointer border" src={image.url} alt={image.altText} />
                            )
                        }
                    </div>

                    {/* main image */}
                    <div className="md:w-1/2">
                        <div className="mb-4">
                            <img src={selectedroduct.images[0]?.url} alt={selectedroduct.images[0]?.altText} className="w-full object-cover h-auto rounded-lg"/>
                        </div>
                    </div>

                    {/* mobile thumbnail */}
                    <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
                        {
                            selectedroduct.images.map((image, index)=>
                            <img key={index} className="w-20 h-20 object-cover rounded-lg cursor-pointer border" src={image.url} alt={image.altText} />
                            )
                        }
                    </div>

                    {/* right side */}
                    <div className="">

                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSeller;