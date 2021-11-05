import {
  GET_STRAPI_BLOG,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAILURE,
  GET_STRAPI_TIDBITS,
  GET_TIDBITS_SUCCESS,
  GET_TIDBITS_FAILURE,
  GET_STRAPI_JOBS,
  GET_JOBS_SUCCESS,
  GET_JOBS_FAILURE,
} from "../actions";

//Strapi Data initial state
const initialState = {
  blogPosts: [],
  tidbits: [],
  jobs: [],
  blogLoading: false,
  tidbitsLoading: false,
  jobsLoading: false,
  blogError: {},
  tidbitsError: {},
  jobsError: {},
};

//price reducer
const strapiData = (state = initialState, action) => {
  switch (action.type) {
    case GET_STRAPI_BLOG:
      return {
        ...state,
        blogLoading: true,
      };
    case GET_BLOG_SUCCESS:
      return {
        ...state,
        blogLoading: false,
        blogPosts: action.data,
      };
    case GET_BLOG_FAILURE:
      return {
        ...state,
        blogLoading: false,
        blogError: action.error,
      };
    case GET_STRAPI_TIDBITS:
      return {
        ...state,
        tidbitsLoading: true,
      };
    case GET_TIDBITS_SUCCESS:
      return {
        ...state,
        tidbitsLoading: false,
        tidbits: action.data,
      };
    case GET_TIDBITS_FAILURE:
      return {
        ...state,
        tidbitsLoading: false,
        tidbitsError: action.error,
      };
    case GET_STRAPI_JOBS:
      return {
        ...state,
        jobsLoading: true,
      };
    case GET_JOBS_SUCCESS:
      return {
        ...state,
        jobsLoading: false,
        jobs: action.data,
      };
    case GET_JOBS_FAILURE:
      return {
        ...state,
        jobsLoading: false,
        jobsError: action.error,
      };
    default:
      return state;
  }
};

export default strapiData;
