import axios from "axios"
import  {CREATE_ORDER_SUCCESS, CLEAR_CART, CLEAR_ORDER} from "../actionTypes";

export const createOrder = (order) => (dispatch) => {
    axios.post("https://run.mocky.io/v3/054536e7-b6ce-4e4f-8b20-759036566004",{order})
            .then(response => {
                console.log(response)
                const order= response.data
                dispatch(createOrderSucccess( order))
            });

            localStorage.clear("cartItems");
            dispatch({type: CLEAR_CART});   
    }


export const createOrderSucccess = order => {

    return{
        type: CREATE_ORDER_SUCCESS,
        payload: order
    }
}

export const clearOrder = () => (dispatch) => {
    dispatch({type: CLEAR_ORDER});
}
