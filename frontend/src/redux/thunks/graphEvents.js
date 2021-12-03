import {
  getReporterEvents,
  getReporterEventsSuccess,
  getReporterEventsFailure,
} from "../actions";

import { parseReportEntities } from "./graphEventHelpers";

export const getEvents = (loading, error, data) => (dispatch) => {
  try {
    //dispatch data on success
    if (data?.reportEntities) {
      let newEvents = parseReportEntities(data.reportEntities);
      // console.log("GRAPH: ", newEvents[0]);
      dispatch(getReporterEventsSuccess(newEvents));
    }
    //dispatch loading state on loading
    if (loading) dispatch(getReporterEvents());
    //dispatch error state on error
    if (error) dispatch(getReporterEventsFailure(error));
  } catch (e) {
    console.error("error", e);
    //dispatch error
    dispatch(getReporterEventsFailure(e));
  }
};
