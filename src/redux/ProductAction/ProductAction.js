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