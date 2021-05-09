import {FETCH_PRODUCTS_SUCCESS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_SIZE} from "../actionTypes";

const initialState = {
    items: [],
    filteredItems:[]
}
export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_PRODUCTS_BY_SIZE:
            return {
                ...state,
                size: action.payload.size,
                filteredItems: action.payload.items,
            };

        case ORDER_PRODUCTS_BY_SIZE:
            return {
                ...state,
                sort: action.payload.sort,
                filteredItems: action.payload.items
            };    

        case FETCH_PRODUCTS_SUCCESS:
            return { items: action.payload, filteredItems:action.payload};
        default:
            return state;    
    }
};