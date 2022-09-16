import Products from "../components/products/Products"
import data from "../data"

export default function Home () {
    return (
        <Products products={data} />
    )
}