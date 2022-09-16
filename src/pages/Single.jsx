import { useParams } from "react-router-dom"
import data from "../data";

export default function Single() {
const  {id} = useParams()
const product = data.find((product) => product.id === +id)

return (
        <div>
            <div id="single" className="row justify-content-center align-items-center text-white mx-auto">
                <div className="col-md-6 ">
                <img src={require(`../images/${product.id}.jpg`)}
                alt=""
                className="card-img-top mb-5 mb-md-0"
                />
                </div>
            </div>
        </div>
    )
}