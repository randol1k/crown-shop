import { ActionTypes } from ".";

export interface CartItem {
  id: number;
  name: string;
  quantity: number;
  imageUrl: string;
  price: number;
}

export interface SetCart {
  type: ActionTypes.setCart;
  payload: CartItem[];
}

export interface AddCartItemAction {
  type: ActionTypes.addCartItem;
  payload: CartItem;
}

export interface RemoveCartItemAction {
  type: ActionTypes.removeCartItem;
  payload: string;
}

export interface SetIsCartShownAction {
  type: ActionTypes.setIsCartShown;
  payload: boolean;
}

export interface AddItemQtyAction {
  type: ActionTypes.addItemQty;
  payload: string;
}

export interface RemoveItemQtyAction {
  type: ActionTypes.removeItemQty;
  payload: string;
}

export const setCart = (cartItems: CartItem[]) => {
  return {
    type: ActionTypes.setCart,
    payload: cartItems,
  };
};

export const addCartItem = (item: CartItem) => {
  return {
    type: ActionTypes.addCartItem,
    payload: item,
  };
};

export const addItemQty = (itemName: string) => {
  return {
    type: ActionTypes.addItemQty,
    payload: itemName,
  };
};

export const removeItemQty = (itemName: string) => {
  return {
    type: ActionTypes.removeItemQty,
    payload: itemName,
  };
};

export const removeCartItem = (itemName: string) => {
  return {
    type: ActionTypes.removeCartItem,
    payload: itemName,
  };
};

export const setIsCartShown = (newCartState: boolean) => {
  return {
    type: ActionTypes.setIsCartShown,
    payload: newCartState,
  };
};
