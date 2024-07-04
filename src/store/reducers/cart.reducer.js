import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_CART_CHARACTER_QUANTITY,
  DECREMENT_CART_CHARACTER_QUANTITY,
  CLEAR_CART,
} from "../actions/cart.action";

const initialState = {
  shoppingCart: [],
  total: 0,
};

const sumTotal = (shoppingCart) => {
  return shoppingCart
    .map((item) => item.quantity * item.characterPrice)
    .reduce((a, b) => a + b, 0);
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = { ...action.payload, quantity: 1 };
      const newShoppingCartAdd = [...state.shoppingCart, newItem];
      return {
        ...state,
        shoppingCart: newShoppingCartAdd,
        total: sumTotal(newShoppingCartAdd),
      };
    case REMOVE_FROM_CART:
      const newShoppingCartRemove = state.shoppingCart.filter(
        (item) => item.characterId !== action.payload.characterId
      );
      return {
        ...state,
        shoppingCart: newShoppingCartRemove,
        total: sumTotal(newShoppingCartRemove),
      };
    case INCREMENT_CART_CHARACTER_QUANTITY:
      const newShoppingCartIncrementQuantity = state.shoppingCart.map(
        (item) => {
          if (item.characterId === action.payload.characterId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        }
      );
      return {
        ...state,
        shoppingCart: newShoppingCartIncrementQuantity,
        total: sumTotal(newShoppingCartIncrementQuantity),
      };
    case DECREMENT_CART_CHARACTER_QUANTITY:
      const newShoppingCartDecrementQuantity = state.shoppingCart.map(
        (item) => {
          if (item.characterId === action.payload.characterId) {
            if (item.quantity > 1) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }
          }
          return item;
        }
      );
      return {
        ...state,
        shoppingCart: newShoppingCartDecrementQuantity,
        total: sumTotal(newShoppingCartDecrementQuantity),
      };
    case CLEAR_CART:
      return {
        ...state,
        shoppingCart: [],
        total: 0,
      };
    default:
      return state;
  }
};

export default CartReducer;
