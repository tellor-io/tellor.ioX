import {
  GET_REPORTER_EVENTS,
  GET_REPORTER_EVENTS_SUCCESS,
  GET_REPORTER_EVENTS_FAILURE,
  GET_VOTE_EVENTS,
  GET_VOTE_EVENTS_SUCCESS,
  GET_VOTE_EVENTS_FAILURE,
} from "../actions";

//price state
const initialState = {
  eventsData: [],
  eventsIsLoading: false,
  eventsError: {},
  votesData: [],
  votesIsLoading: false,
  votesError: {},
};

//price reducer
const graphEvents = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPORTER_EVENTS:
      return {
        ...state,
        eventsIsLoading: true,
      };
    case GET_REPORTER_EVENTS_SUCCESS:
      return {
        ...state,
        eventsIsLoading: false,
        eventsData: action.data,
      };
    case GET_REPORTER_EVENTS_FAILURE:
      return {
        ...state,
        eventsIsLoading: false,
        eventsError: action.error,
      };
    case GET_VOTE_EVENTS:
      return {
        ...state,
        votesIsLoading: true,
      };
    case GET_VOTE_EVENTS_SUCCESS:
      return {
        ...state,
        votesIsLoading: false,
        votesData: action.data,
      };
    case GET_VOTE_EVENTS_FAILURE:
      return {
        ...state,
        votesIsLoading: false,
        votesError: action.error,
      };
    default:
      return state;
  }
};

export default graphEvents;
