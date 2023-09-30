const ProductReducer = (state, action) => {
  //   if (action.type === "SET_LOADING") {
  //     return {
  //       ...state,
  //       isLoading: true,
  //     };
  //   }

  //   if (action.type === "API_ERROR") {
  //     return {
  //       ...state,
  //       isLoading: false,
  //       isError: true,
  //     };
  //   }

  switch (action.type) {
    // all products
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      //featured data
      const featureData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
        isError: false,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // single product
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    // default
    default:
      return state;
  }

  //   return state;
};

export default ProductReducer;
