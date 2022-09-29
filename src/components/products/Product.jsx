import { useNavigate } from "react-router-dom";
import ProductButton from "./ProductButton";
import Price from "../extra/Price"
export default function Product({ product = [] }) {
    const nav = useNavigate();
    const {id, name, date, price} = product
    return (
        <div className="col ">
            <div className="card h-100 " id="product">
                <img
                    src={require(`../../images/${id}.jpg`)}
                    alt={product.name}
                    className="card-img-top pointer"
                    onClick={() => nav(`/single/${id}`)}
                    title={name}

                />
                <div className="card-body pd-4">
                    <div className="text-center">
                        <h6 onClick={() => nav(`/single/${id}`)} className="fw-bolder pointer" >{name}</h6>
                        <h6>{date}</h6>
                        <span >
                            <Price value={price} />
                        </span>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-red">
                    <ProductButton product={product}/>
                </div>
            </div>
        </div>
    );
}
