import { useLocation, useNavigate } from "react-router-dom"
import CategorySelector from "./CategorySelector"
import SearchBar from "./SearchBar"
import CartButton from "./CartButton"
import Condition from "../extra/Condition"
import data from "../../data"

export default function Navbar({ title = "" }) {

    const nav = useNavigate()
    let { pathname } = useLocation()
    const id = data.id
    return (
        <nav className="navbar navbar-expand-lg navbar  border-bottom">
            <div className="container-fluid px-md-5">
                <span onClick={() => nav("/")} id="name" className="text-light navbar-brand fw-bold pointer fs-1 ">
                    {title}
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                    <Condition test={(pathname === "/")} success={
                        <>
                            <CategorySelector />
                            <SearchBar />
                        </>
                    } />
                    <CartButton />

                </div>
            </div>
        </nav>
    )
}
