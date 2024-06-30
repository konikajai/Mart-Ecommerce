import { useEffect } from "react";
import { ACTION_TYPE } from "../types/ActionType";

const initialState = {
    // productData: [],
    cartData: [],
}

export function productReducer(state = initialState, action) {
    console.log(action);
    console.log(action.type);

    switch (action.type) {
        case ACTION_TYPE.ADD_TO_CART:
            const productExists = state.cartData.find(product => product.id === action.payload.id);
            if (productExists) {
                return {
                    ...state,
                    cartData: state.cartData.map((product) =>
                        product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product
                    ),
                };
            }
            else {
                return {
                    ...state,
                    cartData: [...state.cartData, { ...action.payload, quantity: 1 }],
                };
            }
        case ACTION_TYPE.REMOVE_FROM_CART:
            const filterProduct = state.cartData.filter((cartProduct) => cartProduct.id !== action.payload)
            return {
                ...state, cartData: filterProduct
            };
        case ACTION_TYPE.INCREASE_QUANTITY:
            return {
                ...state,
                cartData: state.cartData.map((product) =>
                    product.id === action.payload ? { ...product, quantity: product.quantity + 1 } : product
                ),
            };
        case ACTION_TYPE.DECREASE_QUANTITY:
            return {
                ...state,
                cartData: state.cartData.map((product) =>
                    product.id === action.payload
                        ? { ...product, quantity: Math.max(1, product.quantity - 1) }
                        : product
                ),
            };
        default:
            return state;
    }
}