import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialeState = {
    cart: [],
    products: [
        { name: 'Lenovo Laptop', id: 1 },
        { name: 'Asus Laptop', id: 2 },
        { name: 'Hp Laptop', id: 3 },
        { name: 'Apple Laptop', id: 4 },
        { name: 'Dell Laptop', id: 5 }]
}
const cartReducers = (state = initialeState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return { ...state, cart: newCart }
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.cartId !== id);
            return { ...state, cart: remainingCart }
        default:
            return state;
    }

}

export default cartReducers;