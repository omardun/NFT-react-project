import { useSelector, useDispatch } from "react-redux";
import { actions as productsActions} from "../../global/slices/productsSlice";

export default function SearchBar() {

    const { searchTerm } = useSelector(state => state.products)

    const dispatch = useDispatch()

    return (
        <form onSubmit={(e) => e.preventDefault()} className="d-flex ms-0 ms-lg-3">
            <input type="search"
                placeholder="Search"
                className="form-control ms-md-auto me-2"
                onChange={(e) => { dispatch(productsActions.setSearchTerm(e.target.value)) }}
                value={searchTerm}
            />
        </form>
    )
}