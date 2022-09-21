import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import data from "../../data";


export const {actions , reducer} = createSlice({
    name: "cart",
    initialState: {
        items: [],
        cartNumbers: {
            subtotal: 1,
            shipping: 2,
            tax: 3,
            total: 4
        }
    },
    reducers: {
        addToCart(state, {payload: item}) {
            state.items.push({...item, quantity: 1})
            console.log({...item, quantity: 1});
        },
        removeFromCart(state, {payload: item}) {
            const index = state.items.findIndex((i) => i.id === item.id)
            state.items.splice(index, 1)
        },
        incrementItemQuantity(state, {payload: amount}) {
            console.log( "incrementItemQuantity",amount);
        }
    }
})