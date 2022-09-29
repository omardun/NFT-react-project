import { useNavigate } from "react-router-dom"

export default function CartBuyButton({ title = "Buy Now" }) {
    const nav = useNavigate()
    const buy = () => {
        // console.log('buying now');
        if (window.confirm("Would you like to place your order?")) {
            alert("Order Placed Successfully!")
            nav("/")
            window.location.reload()
        }
    }
    return (
        <button onClick={buy} className="btn btn-success d-block w-100 fw-bold mt-3">{title}</button>
    )
}