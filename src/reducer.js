export const initialState = {
  basket: [
    // {
    //   id: "12321341",
    //   title:
    //     "Oppo A52 (Twilight Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
    //   price: 13990.0,
    //   rating: 4,
    //   image:
    //     "https://images-na.ssl-images-amazon.com/images/I/71FPmXaDfbL._SL1500_.jpg",
    // },
  ],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      console.log("REMOVE_FROM_BASKET", action.id);
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't find ${action.id} while removing product`);
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
}

export default reducer;
