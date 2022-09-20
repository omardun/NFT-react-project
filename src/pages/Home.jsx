import Products from "../components/products/Products"
import { useSelector } from "react-redux"

export default function Home() {

    const { productsFromSearch } = useSelector((state) => state.products)
    return (
        <Products products={productsFromSearch} />
    )
}