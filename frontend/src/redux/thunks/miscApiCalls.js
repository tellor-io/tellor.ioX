import {
  getCoinGecko,
  getCoinGeckoSuccess,
  getCoinGeckoFailure,
  getGithub,
  getGithubSuccess,
  getGithubFailure,
  getTwitter,
  getTwitterSuccess,
  getTwitterFailure,
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
      fetch("https://api.github.com/orgs/tellor-io/events", {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      })
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
    setInterval(() => {
      //console.log("60 Seconds Later in Github");
      githubDataFetch();
    }, 60000);
  } catch (e) {
    console.error("error", e);
    //dispatch error
    dispatch(getGithubFailure(e));
  }
};
export const getTwitterInfo = () => (dispatch) => {
  try {
    //dispatch request
    dispatch(getTwitter());
    //fetch data
    const twitterUrl =
      "/2/users/1113767494177755136/tweets?tweet.fields=created_at";
    const twitterDataFetch = () =>
      fetch(twitterUrl, {
        credentials: "include",
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_TWITTER_BEARER_TOKEN,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          //dispatch success
          // console.log("TWITTER DATA", data.data);
          const formatted = data.data.map((tweet) => {
            tweet.formattedDate = formatDate(tweet.created_at);
            if (tweet.text.length > 70) {
              tweet.text = tweet.text.substring(0, 60) + " ...";
            }
            return tweet;
          });
          dispatch(getTwitterSuccess(formatted));
        });
    twitterDataFetch();
    //fetching data every 60 secs to update home page
    setInterval(() => {
      //console.log("60 Seconds Later in Twitter");
      twitterDataFetch();
    }, 60000);
  } catch (e) {
    console.error("error", e);
    //dispatch error
    dispatch(getTwitterFailure(e));
  }
};
