import {
  getCoinGecko,
  getCoinGeckoSuccess,
  getCoinGeckoFailure,
  getGithub,
  getGithubSuccess,
  getGithubFailure,
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
    //fetching data every 60 secs to update home page
    setInterval(() => {
      fetch("https://api.coingecko.com/api/v3/coins/tellor")
        .then((response) => response.json())
        .then((data) => {
          //dispatch success
          //console.log("COIN GECKO", data.market_data.current_price.usd);
          dispatch(getCoinGeckoSuccess(data.market_data.current_price.usd));
        });
    }, 60000);
  } catch (e) {
    console.error("error", e);
    //dispatch error
    dispatch(getCoinGeckoFailure(e));
  }
};
export const getGithubInfo = () => (dispatch) => {
  try {
    //dispatch request
    dispatch(getGithub());
    //fetch data
    // setInterval(() => {
    //   console.log("60 Seconds Later in Github");
    // }, 60000);
    fetch("https://api.github.com/orgs/tellor-io/events")
      .then((response) => response.json())
      .then((data) => {
        //dispatch success
        //console.log("GITHUB", data);
        dispatch(getGithubSuccess(data));
      });
  } catch (e) {
    console.error("error", e);
    //dispatch error
    dispatch(getGithubFailure(e));
  }
};
