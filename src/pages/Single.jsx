import { useParams } from "react-router-dom"
import data from "../data";
import ProductButton from "../components/products/ProductButton"
import Line from "../components/extra/Line";
import Products from "../components/products/Products"


export default function Single() {
    const { id } = useParams()
    const product = data.find((product) => product.id === +id)

    return (
        <div>
            <div id="single" className="row justify-content-center align-items-center text-white mx-auto">
                <div className="col-md-6 ">
                    <img src={require(`../images/${product.id}.jpg`)}
                        alt=""
                        className="card-img-top mb-5 mb-md-0 p-0 p-lg-5"
                    />
                </div>
                <div className="col-md-6 text-center text-md-start">
                    <h2 className="fs-1 fw-bold">
                        {product.name}
                    </h2>
                    <div className="fs-5 mb-2">
                        {product.price}
                    </div>
                    <p className="lead">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptates.
                    </p>
                    <ProductButton />
                </div>
            </div>
            <br></br>
            <h2 className="text-white my-4 text-center">Similar Products</h2>
            <Products products={data.slice(16,21)}/>
        </div>
    )
}