import { ACTION_TYPE } from "../types/ActionType"

export function addToCart(product) {
    return {
        type:ACTION_TYPE.ADD_TO_CART,
        payload:product,
    }
}
export function removeFromCart(id) {
    return {
        type:ACTION_TYPE.REMOVE_FROM_CART,
        payload:id,
    }
}
export function increaseQuantity(id) {
    return {
        type: ACTION_TYPE.INCREASE_QUANTITY,
        payload: id,
    };
}

export function decreaseQuantity(id) {
    return {
        type: ACTION_TYPE.DECREASE_QUANTITY,
        payload: id,
    };
}