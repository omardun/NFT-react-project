import { useNavigate } from "react-router-dom";
import ProductButton from "./ProductButton";

export default function Product({ product = [] }) {
    const nav = useNavigate();
    return (
        <div className="col">
            <div className="card h-100" id="product">
                <img
                    src={require(`../../images/${product.id}.jpg`)}
                    alt=""
                    className="card-img-top pointer"
                    onClick={() => nav(`/single/${product.id}`)}
                    title={product.name}

                />
                <div className="card-body pd-4">
                    <div className="text-center">
                        <h6 onClick={() => nav(`/single/${product.id}`)} className="fw-bolder pointer" >{product.name}</h6>
                        <span className="pointer" onClick={() => nav(`/single/${product.id}`)}>{product.price}</span>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <ProductButton />
                </div>
            </div>
        </div>
    );
}
