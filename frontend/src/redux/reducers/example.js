import { GET_EXAMPLE_REQUEST, GET_EXAMPLE_SUCCESS, GET_EXAMPLE_FAILURE, } from '../actions';

const initialState = {
  examples: [],
  isLoading: false,
  error: {},
};

const example = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXAMPLE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_EXAMPLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        examples: action.examples
      };
    case GET_EXAMPLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default example;