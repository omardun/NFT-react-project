export default function CartBuyButton ({title="Buy Now"}) {

    const buy = () => {
        console.log('buying now');
    }

    return (
        <button onClick={buy} className="btn btn-success d-block w-100 fw-bold mt-3">{title}</button>
    )
}