import Products from "../components/products/Products"
import { useSelector } from "react-redux"

export default function Home() {

    const { productsFromSearch } = useSelector((state) => state.products)
    return (

        <>
        <img src={require("../images/mario.gif")}
                        alt=""
                        id="mario"
                        className="card-img-top"
                    />
            <Products products={productsFromSearch} />
        </>
    )
}