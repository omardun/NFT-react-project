import { createSlice } from "@reduxjs/toolkit";
import data from "../../data"
import {uniq} from "lodash"
import { loremIpsum } from "lorem-ipsum";

const DEFAULT_CATEGORY = "All"
data.forEach((d) => d.description = loremIpsum()) //dont have to use lorem ipsum


export  const {actions, reducer} = createSlice({
    name : 'products',
    initialState : {
        products : data,
        productsFromSearch : data,
        categories: [DEFAULT_CATEGORY, ...(uniq(data.map((product) => product.category))).sort()],
        seleectedCategory: DEFAULT_CATEGORY,
        single: data[0], singleSimilarProducts : data.slice(0,4),
        searchTerm: ""
    },
    reducers: {
        addProduct (state, {payload}) {
            state.products.push(payload)
        },
        clearProducts(state) {
            state.products = [];
        }
    }
})