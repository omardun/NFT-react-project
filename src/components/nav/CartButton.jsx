import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartButton() {
    const { items } = useSelector(state => state.cart)
    const nav = useNavigate()
    const btnBgColor = (items.length === 0) ? "none" : "white"
    return (
        <button onClick={() => nav("/cart")} className="btn btn-light d-md-block mt-3 mt-lg-0" type="button">
            <i className="bi bi-cart3"></i>
            <span className="mx-2"></span>
            <span className={`badge text-success bg-${btnBgColor}`}>{items.length}</span>
        </button>
    )
}