export default function CategorySelector() {

    const title = "All"
    const categories = ['all', 'jackets', 'scarves', 'gloves', 'hats', 'socks']


    return (
        <div className="dropdown mb-3 mb-lg-0">
            <button className="btn btn-outline-success text-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                {title}
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