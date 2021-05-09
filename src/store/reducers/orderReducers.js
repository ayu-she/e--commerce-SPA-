import { CLEAR_ORDER, CREATE_ORDER_SUCCESS} from "../actionTypes";

const initialState = {
    order: []
}

const orderReducer = (state= { initialState }, action) => {
    switch(action.type) {
        case CREATE_ORDER_SUCCESS:
            return {order: action.payload};
        case CLEAR_ORDER:
            return { order: null} ;
        default:
            return state;        
    }
};
export  default orderReducer ;