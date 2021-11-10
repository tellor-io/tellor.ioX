//get Coin Gecko TRB Price
export const GET_COIN_GECKO = "GET_COIN_GECKO";
export const getCoinGecko = () => {
  return {
    type: "GET_COIN_GECKO",
  };
};
export const GET_COIN_GECKO_SUCCESS = "GET_COIN_GECKO_SUCCESS";
export const getCoinGeckoSuccess = (data) => {
  return {
    type: "GET_COIN_GECKO_SUCCESS",
    data,
  };
};
export const GET_COIN_GECKO_FAILURE = "GET_COIN_GECKO_FAILURE";
export const getCoinGeckoFailure = (error) => {
  return {
    type: "GET_COIN_GECKO_FAILURE",
    error,
  };
};

//get Github Activity
export const GET_GITHUB = "GET_GITHUB";
export const getGithub = () => {
  return {
    type: "GET_GITHUB",
  };
};
export const GET_GITHUB_SUCCESS = "GET_GITHUB_SUCCESS";
export const getGithubSuccess = (data) => {
  return {
    type: "GET_GITHUB_SUCCESS",
    data,
  };
};
export const GET_GITHUB_FAILURE = "GET_GITHUB_FAILURE";
export const getGithubFailure = (error) => {
  return {
    type: "GET_GITHUB_FAILURE",
    error,
  };
};

//get Twitter Activity
export const GET_TWITTER = "GET_TWITTER";
export const getTwitter = () => {
  return {
    type: "GET_TWITTER",
  };
};
export const GET_TWITTER_SUCCESS = "GET_TWITTER_SUCCESS";
export const getTwitterSuccess = (data) => {
  return {
    type: "GET_TWITTER_SUCCESS",
    data,
  };
};
export const GET_TWITTER_FAILURE = "GET_TWITTER_FAILURE";
export const getTwitterFailure = (error) => {
  return {
    type: "GET_TWITTER_FAILURE",
    error,
  };
};
