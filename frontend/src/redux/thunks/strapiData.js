import {
  getStrapiBlog,
  getBlogSuccess,
  getBlogFailure,
  getStrapiTidbits,
  getTidbitsSuccess,
  getTidbitsFailure,
  getStrapiJobs,
  getJobsSuccess,
  getJobsFailure,
} from "../actions";

import {
  sortDataByProperty,
  dateFormatter,
  urlFormatter,
} from "./strapiDataHelpers";

export const getStrapiData = () => (dispatch) => {
  //Getting Blog Posts
  try {
    //dispatch request
    dispatch(getStrapiBlog());
    //fetch blog data
    fetch("http://167.172.156.209:1337/blog-posts")
      .then((response) => response.json())
      .then((data) => {
        //data formatting
        let order = 0;
        let sorted = sortDataByProperty("publishDate", data);
        let final = sorted.map((post) => {
          post.order = order;
          post.publishDate = dateFormatter(post.publishDate);
          post.postUrl = urlFormatter(post.title);
          order++;
          return post;
        });
        //dispatch success
        dispatch(getBlogSuccess(final));
      });
  } catch (e) {
    console.error("error", e);
    //dispatch error
    dispatch(getBlogFailure(e));
  }

  //Getting Tidbits
  try {
    //dispatch request
    dispatch(getStrapiTidbits());
    //fetch blog data
    fetch("http://167.172.156.209:1337/tidbits")
      .then((response) => response.json())
      .then((data) => {
        //dispatch success
        dispatch(getTidbitsSuccess(data));
      });
  } catch (e) {
    console.error("error", e);
    //dispatch error
    dispatch(getTidbitsFailure(e));
  }

  //Getting Jobs
  try {
    //dispatch request
    dispatch(getStrapiJobs());
    //fetch blog data
    fetch("http://167.172.156.209:1337/jobs")
      .then((response) => response.json())
      .then((data) => {
        //dispatch success
        dispatch(getJobsSuccess(data));
      });
  } catch (e) {
    console.error("error", e);
    //dispatch error
    dispatch(getJobsFailure(e));
  }
};