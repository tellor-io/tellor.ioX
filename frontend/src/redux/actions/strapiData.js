//Strapi Blog Action Creators
export const GET_STRAPI_BLOG = "GET_STRAPI_BLOG";
export const getStrapiBlog = () => {
  return {
    type: "GET_STRAPI_BLOG",
  };
};
export const GET_BLOG_SUCCESS = "GET_BLOG_SUCCESS";
export const getBlogSuccess = (data) => {
  return {
    type: "GET_BLOG_SUCCESS",
    data,
  };
};
export const GET_BLOG_FAILURE = "GET_BLOG_FAILURE";
export const getBlogFailure = (error) => {
  return {
    type: "GET_BLOG_FAILURE",
    error,
  };
};

//Strapi Tidbit Action Creators
export const GET_STRAPI_TIDBITS = "GET_STRAPI_TIDBITS";
export const getStrapiTidbits = () => {
  return {
    type: "GET_STRAPI_TIDBITS",
  };
};
export const GET_TIDBITS_SUCCESS = "GET_TIDBITS_SUCCESS";
export const getTidbitsSuccess = (data) => {
  return {
    type: "GET_TIDBITS_SUCCESS",
    data,
  };
};
export const GET_TIDBITS_FAILURE = "GET_TIDBITS_FAILURE";
export const getTidbitsFailure = (error) => {
  return {
    type: "GET_TIDBITS_FAILURE",
    error,
  };
};

//Strapi Jobs Action Creators
export const GET_STRAPI_JOBS = "GET_STRAPI_JOBS";
export const getStrapiJobs = () => {
  return {
    type: "GET_STRAPI_JOBS",
  };
};
export const GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS";
export const getJobsSuccess = (data) => {
  return {
    type: "GET_JOBS_SUCCESS",
    data,
  };
};
export const GET_JOBS_FAILURE = "GET_JOBS_FAILURE";
export const getJobsFailure = (error) => {
  return {
    type: "GET_JOBS_FAILURE",
    error,
  };
};
