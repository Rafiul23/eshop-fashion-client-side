import { useState } from "react";
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
    
    return (
        <div>
            
        </div>
    );
};

export default FilterSideBar;