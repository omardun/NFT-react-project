export default function CartItems ({item = {}}) {
    return (
        <li className="list-group-item">
            <div className="my-0 d-flex justify-content-between align-items-center">
                <span className="fw-bolder fs-6 me-auto">{item.name}({item.price})</span>
                <div className="btn-group">
                    <button className="btn border">-</button>
                    <button className="btn btn-dark border" disabled>2</button>
                    <button className="btn border">+</button>
                </div>
            </div>
            <div className="desc">{item.description}</div>
        </li>
    )
}