import {configureStore} from "@reduxjs/toolkit";
import {reducer as productsReducer} from "./slices/productsSlice"
// import {reducer as cartReducer} from "./slices/cartSlice"


 export default configureStore ({
    reducer: {
        products : productsReducer
    }
})
