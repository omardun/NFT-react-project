import { useSelector } from "react-redux"


export default function CategorySelector() {

    const {categories, selectedCategory} = useSelector(state => state.products)

    return (
        <div className="dropdown mb-3 mb-lg-0">
            <button className="btn btn-primary text-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                {selectedCategory}Products
            </button>
            <ul className="dropdown-menu">
                {categories.map((category) => 
                    (
                    <li key={category}>
                        <a href="#" className="dropdown-item pointer" >{category}</a>
                    </li>
                    )
                )}
            </ul>
        </div>
    )
}