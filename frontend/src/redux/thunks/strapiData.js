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

export const getStrapiData = () => (dispatch) => {
  //Getting Blogs
  try {
    //dispatch request
    dispatch(getStrapiBlog());
    //fetch data
    fetch("http://167.172.156.209:1337/blog-posts")
      .then((response) => response.json())
      .then((data) => {
        //dispatch success
        console.log("THIS IS THE STRAPI BLOGPOSTS", data);
        // dispatch(getBlogSuccess(data));
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
    //fetch data
    fetch("http://167.172.156.209:1337/tidbits")
      .then((response) => response.json())
      .then((data) => {
        //dispatch success
        console.log("THIS IS THE STRAPI TIDBITS", data);
        // dispatch(getTidbitsSuccess(data));
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
    //fetch data
    fetch("http://167.172.156.209:1337/jobs")
      .then((response) => response.json())
      .then((data) => {
        //dispatch success
        console.log("THIS IS THE STRAPI JOBS DATA", data);
        // dispatch(getJobsSuccess(data));
      });
  } catch (e) {
    console.error("error", e);
    //dispatch error
    dispatch(getJobsFailure(e));
  }
};
