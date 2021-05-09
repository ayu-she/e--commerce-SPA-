
import axios from "axios"
import { FETCH_PRODUCTS_SUCCESS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_SIZE } from "../actionTypes";

// export const fetchProductsRequest = () => {
//     return {
//         type:FETCH_PRODUCTS_REQUEST
//     }
// }
export const fetchProducts = () => {
    return (dispatch) => {
        // dispatch(fetchProductsRequest)
        axios.get("https://run.mocky.io/v3/b2a02f87-a986-42a6-a527-8dff16a54a6f")
            .then(response => {
              
                const products = response.data.products
                dispatch(fetchProductsSucccess(products))
            })   
    }
}

export const fetchProductsSucccess = products => {
    return{
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}







// async(dispatch) => {
//     const res = await axios.get("https://run.mocky.io/v3/054536e7-b6ce-4e4f-8b20-759036566004");
//     dispatch({
//         type:FETCH_PRODUCTS,
//         payload: res.data.products,
//     }) ;
// };

export const filterProducts = (products, size) => (dispatch) => {
    dispatch({
      type: FILTER_PRODUCTS_BY_SIZE,
      payload: {
        size: size,
        items:
          size === ""
            ? products
            : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
      },
    });
  };
  export const sortProducts = (filteredProducts, sort) => (dispatch) => {
    const sortedProducts = filteredProducts.slice();
    if (sort === "latest") {
      sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
    } else {
      sortedProducts.sort((a, b) =>
        sort === "lowest"
          ? a.price > b.price
            ? 1
            : -1
          : a.price > b.price
          ? -1
          : 1
      );
    }

     dispatch({
         type: ORDER_PRODUCTS_BY_SIZE,
         payload: {
             sort: sort,
             items: sortedProducts
            
         },
     });
 }