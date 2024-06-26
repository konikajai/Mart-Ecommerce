import { ACTION_TYPE } from "../types/ActionType";
const initialState = {
    productData: [],
    cartData: [],
}

export function productReducer(state=initialState,action){
    console.log(action);
    console.log(action.type);
    switch (action.type){
        case ACTION_TYPE.ADD_TO_CART:
            return {
                ...state, cartData : [...state.cartData, action.payload]
            };
        case ACTION_TYPE.REMOVE_FROM_CART:
            const filterProduct = state.cartData.filter((cartItem)=>cartItem.id !== action.payload)
            return {
                ...state, cartData : filterProduct
            };
        default:
            return state;
    }
}