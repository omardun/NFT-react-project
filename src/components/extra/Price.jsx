export default function Price({ value = 0, decimal = 0 }) {
    return (
        <>${Number(value).toFixed(decimal)}</>
    )
}