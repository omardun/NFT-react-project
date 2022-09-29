import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartButton() {
    const { items } = useSelector(state => state.cart)
    const nav = useNavigate()
    const btnBgColor = (items.length === 0) ? "none" : "red"
    return (
        <button id="cartButton" onClick={() => nav("/cart")} className="btn btn-dark d-md-block mt-3 mt-lg-0 p-" type="button">
            <i className="bi bi-cart3"></i>
            <span className="mx-2"></span>
            <span id="cartNumber" className={`badge text-warning bg-${btnBgColor}`}>{items.length}</span>
        </button>
    )
}