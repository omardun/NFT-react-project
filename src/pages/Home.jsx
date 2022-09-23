import Products from "../components/products/Products"
import { useSelector } from "react-redux"

export default function Home() {

    const { productsFromSearch } = useSelector((state) => state.products)
    return (
        <>
            <h1>NFT STORE REACT</h1>
            <Products products={productsFromSearch} />
        </>
    )
}