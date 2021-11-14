import {
  getCoinGecko,
  getCoinGeckoSuccess,
  getCoinGeckoFailure,
  getGithub,
  getGithubSuccess,
  getGithubFailure,
} from "../actions";

import { formatDate, formatEvent } from "./miscApiCallsHelpers";

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
    const githubDataFetch = () =>
      fetch("https://api.github.com/orgs/tellor-io/events")
        .then((response) => response.json())
        .then((data) => {
          //dispatch success
          const repoIndexer = 0;
          const githubRepo = data[repoIndexer].repo.name;
          const actorAndDate = `${data[repoIndexer].actor.login} - ${formatDate(
            data[repoIndexer].created_at
          )}`;
          const eventInfo = `${
            data[repoIndexer].payload.action
              ? data[repoIndexer].payload.action.charAt(0).toUpperCase() +
                data[repoIndexer].payload.action.slice(1)
              : ""
          } ${formatEvent(data[repoIndexer].type)} ${
            data[repoIndexer].payload.ref_type
              ? `- ${
                  data[repoIndexer].payload.ref.charAt(0).toUpperCase() +
                  data[repoIndexer].payload.ref.slice(1)
                } ${
                  data[repoIndexer].payload.ref_type.charAt(0).toUpperCase() +
                  data[repoIndexer].payload.ref_type.slice(1)
                }`
              : ""
          }${
            data[repoIndexer].payload.pull_request
              ? `#${data[repoIndexer].payload.pull_request.number} from ${data[repoIndexer].payload.pull_request.user.login}`
              : ""
          }`;
          const githubObj = {
            githubRepo: githubRepo,
            actorAndDate: actorAndDate,
            eventInfo: eventInfo,
          };
          dispatch(getGithubSuccess(githubObj));
        });
    githubDataFetch();
    //fetching data every 60 secs to update home page
    //**** NOTE ****
    //GITHUB has data call restrictions
    //CHECK TO SEE IF THIS WILL BREAK CURRENT SETUP
    setInterval(() => {
      // console.log("60 Seconds Later in Github");
      githubDataFetch();
    }, 60000);
  } catch (e) {
    console.error("error", e);
    //dispatch error
    dispatch(getGithubFailure(e));
  }
};
