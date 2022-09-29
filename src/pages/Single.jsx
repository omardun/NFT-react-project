import { useEffect } from "react";
import { useParams } from "react-router-dom"
import ProductButton from "../components/products/ProductButton"
import Products from "../components/products/Products"
import { useDispatch, useSelector } from "react-redux";
import { actions as productsActions } from "../global/slices/productsSlice";
import Price from "../components/extra/Price"


export default function Single() {
    const { id } = useParams()
    const { single, singleSimilarProducts } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => { dispatch(productsActions.setSingle(id)) }, [id, dispatch])
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
                    <h2 id="title" className="fs-1 fw-bold">
                        {single.name}
                    </h2>
                    <h5 id="date">{single.date}</h5>
                    <div id="price" className="fs-5 mb-2">
                        <Price value={single.price} />
                    </div>
                    <p className="lead">
                        {single.description.substring(0, 250)}
                    </p>
                    <ProductButton product={single} />
                </div>
            </div>
            <br></br>
            <h2 className="text-white my-4 text-center">Similar Products</h2>
            <Products products={singleSimilarProducts} />
        </div>
    )
}