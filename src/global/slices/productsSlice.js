import { createSlice } from "@reduxjs/toolkit";
import data from "../../data"
import { uniq, sortBy } from "lodash"
import { stringSimilarity as getSimScore } from "string-similarity-js";
// import { loremIpsum } from "lorem-ipsum";

const DEFAULT_CATEGORY = "All"
// data.forEach((d) => d.description = loremIpsum()) //dont have to use lorem ipsum


export const { actions, reducer } = createSlice({
    name: 'products',
    initialState: {
        products: data,
        productsFromSearch: data,
        categories: [DEFAULT_CATEGORY, ...(uniq(data.map((product) => product.category))).sort()],
        selectedCategory: DEFAULT_CATEGORY,
        single: data[0], singleSimilarProducts: [],
        searchTerm: ""
    },

    reducers: {
        setSearchTerm(state, { payload: searchTerm }) {
            state.productsFromSearch = state.products
            state.selectedCategory = DEFAULT_CATEGORY
            state.searchTerm = searchTerm
            
            if(searchTerm.length > 0) {
                state.productsFromSearch.forEach((p) => {
                    p.simScore = getSimScore(`${p.name} ${p.category}`, searchTerm)
                    console.log(p.simScore);
                })
                state.productsFromSearch = sortBy(state.productsFromSearch, "simScore").reverse()
            }else {
                state.productsFromSearch = state.products
            }
        },
        setSelectedCategory(state, { payload: category }) {
            state.searchTerm = ""
            state.selectedCategory = category
            state.productsFromSearch = state.products.filter((p) => (
                (category === DEFAULT_CATEGORY) ? true : (p.category === category)
            ))
        },
        setSingle (state, {payload: id}) {
            const product = state.products.find((p) => p.id === +id)
            state.single = product
            state.singleSimilarProducts = state.products.filter((p) => (
                (p.category === product.category ) && (p.id !==  product.id)
            ))
        }

    }
})