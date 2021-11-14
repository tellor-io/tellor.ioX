import {
  GET_COIN_GECKO,
  GET_COIN_GECKO_SUCCESS,
  GET_COIN_GECKO_FAILURE,
  GET_GITHUB,
  GET_GITHUB_SUCCESS,
  GET_GITHUB_FAILURE,
  GET_TWITTER,
  GET_TWITTER_SUCCESS,
  GET_TWITTER_FAILURE,
} from "../actions";

//price state
const initialState = {
  coinGeckoData: 0,
  coinGeckoIsLoading: false,
  coinGeckoError: {},
  githubData: {},
  githubIsLoading: false,
  githubError: {},
  twitterData: [],
  twitterIsLoading: false,
  twitterError: {},
};

//price reducer
const miscApiCalls = (state = initialState, action) => {
  switch (action.type) {
    case GET_COIN_GECKO:
      return {
        ...state,
        coinGeckoIsLoading: true,
      };
    case GET_COIN_GECKO_SUCCESS:
      return {
        ...state,
        coinGeckoIsLoading: false,
        coinGeckoData: action.data,
      };
    case GET_COIN_GECKO_FAILURE:
      return {
        ...state,
        coinGeckoIsLoading: false,
        coinGeckoError: action.error,
      };
    case GET_GITHUB:
      return {
        ...state,
        githubIsLoading: true,
      };
    case GET_GITHUB_SUCCESS:
      return {
        ...state,
        githubIsLoading: false,
        githubData: action.data,
      };
    case GET_GITHUB_FAILURE:
      return {
        ...state,
        githubIsLoading: false,
        githubError: action.error,
      };
    case GET_TWITTER:
      return {
        ...state,
        twitterIsLoading: true,
      };
    case GET_TWITTER_SUCCESS:
      return {
        ...state,
        twitterIsLoading: false,
        twitterData: action.data,
      };
    case GET_TWITTER_FAILURE:
      return {
        ...state,
        twitterIsLoading: false,
        twitterError: action.error,
      };
    default:
      return state;
  }
};

export default miscApiCalls;
