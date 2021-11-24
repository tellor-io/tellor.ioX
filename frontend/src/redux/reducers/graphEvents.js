import {
  GET_REPORTER_EVENTS,
  GET_REPORTER_EVENTS_SUCCESS,
  GET_REPORTER_EVENTS_FAILURE,
} from "../actions";

//price state
const initialState = {
  eventsData: [],
  eventsIsLoading: false,
  eventsError: {},
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
    default:
      return state;
  }
};

export default graphEvents;
