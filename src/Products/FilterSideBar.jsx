import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const FilterSideBar = () => {
    const [searchParams, setSearchParams] = useSearchParams('');
    const [filters, setFilters] = useState({
        category: "",
        color: "",
        gender: "",
        size: [],
        material: [],
        brand: [],
        minPrice: 0,
        maxPrice: 100
    });

    const [priceRange, setPriceRange] = useState([0, 100]);
    const categories = ["Top Wear", "Bottom Wear"];
    const colors = ["Red", "Blue", "Green", "Yellow", "Pink", "White", "Black", "Gray", "Beige", "Navy"];
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    const materials = ['Wool', 'Cotton', 'Denim', 'Polyestar', 'Silk', 'Linen', 'Viscose', 'Flecce'];
    const brands = ['Urban Threads', 'Modern Fit', 'Street Style', 'Beach Breeze', 'Fashionista', 'ChicStyle'];
    const genders = ['Men', 'Women'];
    
    useEffect(()=> {
        const params = Object.fromEntries([...searchParams])

        setFilters({
        category: params.category || "",
        gender: params.gender || "",
        color: params.color || "",
        size: params.size ? params.size.split(',') : [],
        material: params.material ? params.material.split(',') : [],
        brand: params.brand ? params.brand.split(',') : [],
        minPrice: params.minPrice || 0,
        maxPrice: params.maxPrice || 100
    });

    setPriceRange([0, params.maxPrice || 100]);

    }, [searchParams])

    

    return (
        <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Filter</h3>
            {/* category filter */}
            <div className="mb-6">
                <label className="text-gray-600 font-medium mb-2">Category</label>
                {
                    categories.map((category)=> (
                        <div key={category} className="flex items-center mb-1">
                            
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FilterSideBar;