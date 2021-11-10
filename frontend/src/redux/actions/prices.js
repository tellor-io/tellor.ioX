//get prices
export const GET_PRICES_REQUEST = "GET_PRICES_REQUEST";
export const getPricesRequest = () => {
  return {
    type: "GET_PRICES_REQUEST",
  };
};
export const GET_PRICES_SUCCESS = "GET_PRICES_SUCCESS";
export const getPricesSuccess = (data) => {
  return {
    type: "GET_PRICES_SUCCESS",
    data,
  };
};
export const GET_PRICES_FAILURE = "GET_PRICES_FAILURE";
export const getPricesFailure = (error) => {
  return {
    type: "GET_PRICES_FAILURE",
    error,
  };
};
