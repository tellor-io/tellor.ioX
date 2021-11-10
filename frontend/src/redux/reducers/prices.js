import {
  GET_PRICES_REQUEST,
  GET_PRICES_SUCCESS,
  GET_PRICES_FAILURE,
} from "../actions";

//price state
const initialState = {
  data: [],
  isLoading: false,
  error: {},
};

//price reducer
const prices = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRICES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRICES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    case GET_PRICES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default prices;
