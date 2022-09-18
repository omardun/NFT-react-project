import NoContent from "../components/extra/NoContent"
import data from "../data"
import CartItem from "../components/Cart/CartItem"
import CartNumbers from "../components/Cart/CartNumbers"
import CartBuyButton from "../components/Cart/CartBuyButton"

export default function Cart() {
    const items = data.slice(0, 3)

    if (items.length === 0) return <NoContent text="Nothing in your cart" btnText="browse products" />


     return (
        <div className="row py-3">
            <div className="col-12 md-10 col-xl-8">
                <div id="cart" className="border p-3 bg-white text-dark my-3 my-md-0 rounded">
                    <h4 className="mb-3 px-1">
                        cart
                    </h4>
                    <ul className="list-group mb-3 cart-list">
                        {items.map((i) => <CartItem key={i.id} item={i}/>)}
                    </ul>
                    <CartNumbers />
                    <CartBuyButton />
                </div>
            </div>
        </div>
     )

}