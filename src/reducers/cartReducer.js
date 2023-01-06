export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [{ ...action.payload, qty: 1 }, ...state.cart] };
    default:
      return state;
  }
};
