import Web3 from "web3";
import { queryDataParsers } from "./queryDataParsers";

const web3 = new Web3(window.ethereum);

export const parseReportEntities = (reportEntities) =>
  reportEntities.map((event) => {
    //Making a clone of the event obj since it's non-extensible.
    //And only making a clone of event obj, if it has queryData.
    if (event._queryData.length > 1) {
      let clone = JSON.parse(JSON.stringify(event));
      //Adding usable obj values
      //Converting value Hex string to base 10 number
      clone.value = parseInt(Number(event._value), 10);
      //Converting queryId Hex string to base 10 number
      clone.queryId = parseInt(Number(event._queryId), 10);
      //Converting reporter address to checksum address
      clone.reporter = web3.utils.toChecksumAddress(clone._reporter);
      //if queryData is a JSON obj, convert it.
      try {
        //Converting queryData into usable JSON obj
        clone.newQueryData = JSON.parse(
          JSON.parse(JSON.stringify(clone._queryData))
        );
        queryDataParsers[
          clone.newQueryData?.type || clone.newQueryData?.Type || "Default"
        ](clone);
      } catch (err) {
        //If we're here, most likely queryData wasn't JSON
        queryDataParsers["Default"](clone);
        //console.log("::: QUERYDATA PROBABLY WASNT JSON ::: ", err);
      }

      return clone;
    }
  });
