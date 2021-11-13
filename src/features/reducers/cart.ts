import { CartItem, ActionTypes, Actions } from "src/features/actions";

export interface CartReducer {
  addedItems: CartItem[];
  isCartShown: boolean;
}

const initialState = {
  addedItems: [],
  isCartShown: false,
};

export const cartReducer = (
  state: CartReducer = initialState,
  action: Actions
) => {
  switch (action.type) {
    case ActionTypes.setCart:
      return { ...state, addedItems: action.payload };
    case ActionTypes.addCartItem:
      return { ...state, addedItems: [...state.addedItems, action.payload] };
    case ActionTypes.removeCartItem:
      return {
        ...state,
        addedItems: state.addedItems.filter(
          (item: CartItem) => item.name !== action.payload
        ),
      };
    case ActionTypes.setIsCartShown:
      return { ...state, isCartShown: action.payload };
    case ActionTypes.addItemQty:
      const updatedCartToAdd = state.addedItems;
      updatedCartToAdd.forEach((item: CartItem) => {
        if (item.name === action.payload) {
          item.quantity++;
        }
      });
      return { ...state, cart: updatedCartToAdd };
    case ActionTypes.removeItemQty:
      const updatedCartToRemove = state.addedItems;
      updatedCartToRemove.forEach((item: CartItem) => {
        if (item.name === action.payload) {
          item.quantity--;
        }
      });
      return { ...state, cart: updatedCartToRemove };
    default:
      return state;
  }
};
