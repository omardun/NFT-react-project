import { useDispatch } from "react-redux"
import { actions as cartActions } from "../../global/slices/cartSlice"
import Price from "../extra/Price"
export default function CartItems({ item = {} }) {
    const dispatch = useDispatch()

    const incrementQuantity = (amount) => {
        dispatch(cartActions.incrementItemQuantity({ item, amount }))
    }
    return (
        <li className="list-group-item">
            <div className="my-0 d-flex justify-content-between align-items-center">
                <span className="fw-bolder fs-6 me-auto">
                <h5 id="cartTitle">{item.name}</h5>
                <h6 id="date" >{item.date}</h6>
                <h5 id="cartPrice"><Price value={item.price} /></h5>
                </span>
                <div className="btn-group">
                    <button onClick={() => incrementQuantity(-1)} className="btn border">-</button>
                    <button className="btn btn-dark border" disabled>{item.quantity}</button>
                    <button onClick={() => incrementQuantity(1)} className="btn border">+</button>
                </div>
            </div>
            <div className="desc">{item.description}</div>
        </li>
    )
}