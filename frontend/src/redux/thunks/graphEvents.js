import {
  getReporterEvents,
  getReporterEventsSuccess,
  getReporterEventsFailure,
} from "../actions";

import { psrLookup } from "../../utils/psrLookup";
import Web3 from "web3";

export const getEvents = (loading, error, data) => (dispatch) => {
  try {
    //fetch data
    const web3 = new Web3(window.ethereum);

    const parseReportEntities = (reportEntities) =>
      reportEntities.map((event) => {
        const something = {
          ...event,
          realValue: parseInt(Number(event._value), 10),
          _reporter: web3.utils.toChecksumAddress(event._reporter),
          queryData: queryDataParsers[queryData?.type || "Default"](
            event._queryData
          ),
        };
        console.log("REWORK", something);
        return something;
      });

    if (data?.reportEntities) {
      parseReportEntities(data.reportEntities);
      let newEvents = data.reportEntities.map((event) => {
        let clone = JSON.parse(JSON.stringify(event));
        clone.realValue = parseInt(Number(event._value), 10);
        clone.queryData = JSON.parse(JSON.stringify(clone._queryData));
        clone._reporter = web3.utils.toChecksumAddress(clone._reporter);
        try {
          clone.realQueryData = JSON.parse(clone.queryData);
        } catch (err) {
          console.log(err);
        }
        if (
          clone.realQueryData &&
          clone.realQueryData.type === "LegacyRequest"
        ) {
          clone.realQueryData.legacy_name =
            psrLookup[clone.realQueryData.legacy_id].name;
        } else if (
          clone.realQueryData &&
          clone.realQueryData.type === "CoinPrice"
        ) {
          clone.realQueryData.price_type =
            clone.realQueryData.price_type.charAt(0).toUpperCase() +
            clone.realQueryData.price_type.slice(1);
          clone.realQueryData.name = `${
            clone.realQueryData.price_type
          } ${clone.realQueryData.coin.toUpperCase()}/${clone.realQueryData.currency.toUpperCase()}`;
        } else {
          clone.realQueryData = {};
          clone.realQueryData.name = "N/A";
        }

        return clone;
      });
      dispatch(getReporterEventsSuccess(newEvents));
    }

    if (loading) dispatch(getReporterEvents());
    if (error) dispatch(getReporterEventsFailure(error));
  } catch (e) {
    console.error("error", e);
    //dispatch error
    dispatch(getReporterEventsFailure(e));
  }
};
