import { ACTION_TYPE } from "../types/ActionType";

const initialState = {
    productData: [],
    cartData: JSON.parse(localStorage.getItem('cartData')) || [],
};

export function productReducer(state = initialState, action) {
    let updatedCartData;

    switch (action.type) {
        case ACTION_TYPE.ADD_TO_CART:
            const productExists = state.cartData.find(item => item.id === action.payload.id);
            if (productExists) {
                updatedCartData = state.cartData.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                updatedCartData = [...state.cartData, { ...action.payload, quantity: 1 }];
            }
            localStorage.setItem('cartData', JSON.stringify(updatedCartData));
            return { ...state, cartData: updatedCartData };

        case ACTION_TYPE.REMOVE_FROM_CART:
            updatedCartData = state.cartData.filter(cartItem => cartItem.id !== action.payload);
            localStorage.setItem('cartData', JSON.stringify(updatedCartData));
            return { ...state, cartData: updatedCartData };

        case ACTION_TYPE.INCREASE_QUANTITY:
            updatedCartData = state.cartData.map(item =>
                item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
            );
            localStorage.setItem('cartData', JSON.stringify(updatedCartData));
            return { ...state, cartData: updatedCartData };
            
        case ACTION_TYPE.DECREASE_QUANTITY:
            updatedCartData = state.cartData
                .map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter(item => item.quantity > 0);
            localStorage.setItem('cartData', JSON.stringify(updatedCartData));
            return { ...state, cartData: updatedCartData };
        default:
            return state;
    }
}