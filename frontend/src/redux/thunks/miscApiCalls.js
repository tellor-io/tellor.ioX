import {
  getCoinGecko,
  getCoinGeckoSuccess,
  getCoinGeckoFailure,
} from "../actions";

export const getCoinGeckoPrice = () => (dispatch) => {
  try {
    //dispatch request
    dispatch(getCoinGecko());
    //fetch data
    fetch("https://api.coingecko.com/api/v3/coins/tellor")
      .then((response) => response.json())
      .then((data) => {
        //dispatch success
        //console.log("COIN GECKO", data.market_data.current_price.usd);
        dispatch(getCoinGeckoSuccess(data.market_data.current_price.usd));
      });
  } catch (e) {
    console.error("error", e);
    //dispatch error
    dispatch(getCoinGeckoFailure(e));
  }
};
