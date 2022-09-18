export default function CartNumbers () {

const cartNumbers = {subtotal: 119.00, shipping : 2.00, tax : 11.90, total : 132.90}

const rows = [
    {title: "Subtotal", price : cartNumbers.subtotal},
    {title: "Shipping", price : cartNumbers.shipping},
    {title: "Tax", price : cartNumbers.tax},
    {title: "Total (USD)", price : cartNumbers.total},
] 

    return (
        <div id="cart-numbers">
            {rows.map(({title, price}) => (
                <li key={title} className=" border p-3 list-group-item d-flex justify-content-between">
                <span > {title}</span>
                <span className="text-muted"> {price}</span>
            </li>
            ))}
        </div>
    )
}