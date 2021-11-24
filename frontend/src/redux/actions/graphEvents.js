//get events
export const GET_REPORTER_EVENTS = "GET_REPORTER_EVENTS";
export const getReporterEvents = () => {
  return {
    type: GET_REPORTER_EVENTS,
  };
};
export const GET_REPORTER_EVENTS_SUCCESS = "GET_REPORTER_EVENTS_SUCCESS";
export const getReporterEventsSuccess = (data) => {
  return {
    type: GET_REPORTER_EVENTS_SUCCESS,
    data,
  };
};
export const GET_REPORTER_EVENTS_FAILURE = "GET_REPORTER_EVENTS_FAILURE";
export const getReporterEventsFailure = (error) => {
  return {
    type: GET_REPORTER_EVENTS_FAILURE,
    error,
  };
};
