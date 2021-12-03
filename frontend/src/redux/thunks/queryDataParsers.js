import { psrLookup } from "../../utils/psrLookup";

export const queryDataParsers = {
  LegacyRequest: (queryData) => {
    switch (queryData.queryId) {
      case 1:
        queryData.reportedValueName = `Legacy ${
          psrLookup[queryData.queryId].name
        }`;
        queryData.reportedValue = new Intl.NumberFormat("en-EN", {
          style: "currency",
          currency: "USD",
        }).format(queryData.value / 1000000);
        return queryData;
      case 2:
        queryData.reportedValueName = `Legacy ${
          psrLookup[queryData.queryId].name
        }`;
        queryData.reportedValue = new Intl.NumberFormat("en-EN", {
          style: "currency",
          currency: "USD",
        }).format(queryData.value / 1000000);
        return queryData;
    }
    return;
  },
  CoinPrice: (queryData) => {
    return {};
  },
  Default: (queryData) => {
    console.log("DEFAULT CASE::: ", queryData);
    return "default";
  },
};
