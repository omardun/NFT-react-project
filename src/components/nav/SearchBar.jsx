import { useState } from "react"

export default function SearchBar () {

const [text, setText] = useState("")
console.log(text);

    return (
        <form onSubmit={(e) => e.preventDefault()} className="d-flex ms-0 ms-lg-3">
            <input type="text"
            placeholder="Search"
            onChange={(e) => {setText(e.target.value)}}
            className="form-control ms-md-auto me-2"
            />
        </form>
    )
}