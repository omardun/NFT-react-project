import NoContent from "../components/extra/NoContent";
import CartItem from "../components/Cart/CartItem";
import CartNumbers from "../components/Cart/CartNumbers";
import CartBuyButton from "../components/Cart/CartBuyButton";
import { useSelector } from "react-redux";
import Condition from "../components/extra/Condition";
import { useNavigate } from "react-router-dom"

export default function Cart() {
  const { items } = useSelector((state) => state.cart);
  const nav = useNavigate()

  return (
    <Condition
      test={items.length === 0}
      success={
        <NoContent text="No Items in your Cart" btnText="View Products" />
      }
      fail={
        <div className="row py-3">
          <div className=" col-12 col-md-10 col-xl-8 mx-auto">
            <div
              id="cart"
              className="p-3 bg-white text-dark my-3 my-md-0 rounded"
            >
              <button id="homeButtonCart" onClick={() => nav("/")} className=" mb-3 px-3 bi bi-house-door pointer btn btn-primary ">

              </button>

              <ul className="list-group mb-3 cart-list">

                {items.map((i) => (
                  <CartItem key={i.id} item={i} />
                ))}

              </ul>

              <CartNumbers />
              <CartBuyButton />
            </div>
          </div>
        </div>
      }
    />
  );
}
