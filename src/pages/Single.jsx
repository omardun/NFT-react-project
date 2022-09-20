import { useParams } from "react-router-dom"
import ProductButton from "../components/products/ProductButton"
import Line from "../components/extra/Line";
import Products from "../components/products/Products"
import { useSelector } from "react-redux";


export default function Single() {
    const { id } = useParams()
    // const product = data.find((product) => product.id === +id)
    const {single, singleSimilarProducts} = useSelector((state) => state.products)

    return (
        <div>
            <div id="single" className="row justify-content-center align-items-center text-white mx-auto">
                <div className="col-md-6 ">
                    <img src={require(`../images/${single.id}.jpg`)}
                        alt=""
                        className="card-img-top mb-5 mb-md-0 p-0 p-lg-5"
                    />
                </div>
                <div className="col-md-6 text-center text-md-start">
                    <h2 className="fs-1 fw-bold">
                        {single.name}
                    </h2>
                    <div className="fs-5 mb-2">
                        {single.price}
                    </div>
                    <p className="lead">
                        {single.description}
                    </p>
                    <ProductButton />
                </div>
            </div>
            <br></br>
            <h2 className="text-white my-4 text-center">Similar Products</h2>
            <Products products={singleSimilarProducts}/>
        </div>
    )
}