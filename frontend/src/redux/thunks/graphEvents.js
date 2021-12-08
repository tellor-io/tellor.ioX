import {
  getReporterEvents,
  getReporterEventsSuccess,
  getReporterEventsFailure,
  getVoteEvents,
  getVoteEventsSuccess,
  getVoteEventsFailure,
} from "../actions";

import { parseReportEntities, sortDataByProperty } from "./graphEventHelpers";

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
export const getVotes = (loading, error, data) => (dispatch) => {
  try {
    //dispatch data on success
    if (data) {
      let allVoteEventsArray = [];
      for (const entity in data) {
        if (data[entity].length > 0) {
          data[entity].map((event) => {
            allVoteEventsArray.push(event);
          });
        }
      }
      let sortedVoteEvents = sortDataByProperty(
        "timestamp",
        allVoteEventsArray
      );
      let newArray = [];
      let disputeObject = sortedVoteEvents.reduce((acc, curr) => {
        acc[curr.disputeIdentifierHash] = newArray;
        console.log("ACC", acc[curr.disputeIdentifierHash]);
        console.log("CURR", curr.disputeIdentifierHash);
        if (acc[curr.disputeIdentifierHash] == curr.disputeIdentifierHash) {
          newArray.push(curr);
        }
        return acc;
      }, {});
      console.log(disputeObject);
      console.log(sortedVoteEvents);

      // let newEvents = parseReportEntities(data.reportEntities);
      // console.log("GRAPH: ", newEvents[0]);
      // dispatch(getVoteEventsSuccess(newEvents));
    }
    //dispatch loading state on loading
    if (loading) dispatch(getVoteEvents());
    //dispatch error state on error
    if (error) dispatch(getVoteEventsFailure(error));
  } catch (e) {
    console.error("error", e);
    //dispatch error
    dispatch(getVoteEventsFailure(e));
  }
};
