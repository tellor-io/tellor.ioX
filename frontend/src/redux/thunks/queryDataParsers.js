import { psrLookup } from "../../utils/psrLookup";

const eighteenDecimals = 1000000000000000000;

export const queryDataParsers = {
  LegacyRequest: (event) => {
    switch (event.queryId) {
      case 1:
        event.reportedValueName = psrLookup[event.queryId].name;
        event.reportedValue = new Intl.NumberFormat("en-EN", {
          style: "currency",
          currency: "USD",
        }).format(event.value / 1000000);
        return event;
      case 2:
        event.reportedValueName = psrLookup[event.queryId].name;
        event.reportedValue = new Intl.NumberFormat("en-EN", {
          style: "currency",
          currency: "USD",
        }).format(event.value / 1000000);
        return event;
      case 10:
        event.reportedValueName = psrLookup[event.queryId].name;
        event.reportedValue =
          event.value.toString().length > 17
            ? new Intl.NumberFormat("en-EN", {
                style: "currency",
                currency: "USD",
              }).format(event.value / eighteenDecimals)
            : new Intl.NumberFormat("en-EN", {
                style: "currency",
                currency: "USD",
              }).format(event.value / 1000000);
        return event;
      case 41:
        event.reportedValueName = psrLookup[event.queryId].name;
        event.reportedValue =
          event.value.toString().length > 18
            ? (event.value / eighteenDecimals).toString()
            : event.value.toString().length > 6
            ? "*" + (event.value / 1000000).toString()
            : "*" + event.value.toString();
        return event;
      case 50:
        event.reportedValueName = psrLookup[event.queryId].name;
        event.reportedValue = new Intl.NumberFormat("en-EN", {
          style: "currency",
          currency: "USD",
        }).format(event.value / 1000000);
        return event;
      case 59:
        event.reportedValueName = psrLookup[event.queryId].name;
        event.reportedValue = new Intl.NumberFormat("en-EN", {
          style: "currency",
          currency: "JPY",
        }).format(event.value / 1000000);
        return event;
      default:
        event.reportedValueName = "New Legacy Type";
        event.reportedValue = "0";
        return event;
    }
  },
  CoinPrice: (event) => {
    switch (event.newQueryData.coin) {
      case "btc":
        event.reportedValueName = `${
          event.newQueryData.price_type
            ? event.newQueryData.price_type.charAt(0).toUpperCase() +
              event.newQueryData.price_type.slice(1)
            : ""
        } ${
          event.newQueryData.coin ? event.newQueryData.coin.toUpperCase() : ""
        }/${
          event.newQueryData.currency
            ? event.newQueryData.currency.toUpperCase()
            : ""
        }`;
        event.reportedValue = new Intl.NumberFormat("en-EN", {
          style: "currency",
          currency: "USD",
        }).format(event.value / 1000000);
        return event;
      default:
        event.reportedValueName = "New CoinPrice Type";
        event.reportedValue = "0";
        return event;
    }
  },
  SpotPrice: (event) => {
    switch (event.newQueryData.asset) {
      case "wampl":
        event.reportedValueName = `${
          event.newQueryData.type
            ? event.newQueryData.type
            : "No queryData type"
        } ${
          event.newQueryData.asset
            ? event.newQueryData.asset.toUpperCase()
            : "No queryData asset"
        }/${
          event.newQueryData.currency
            ? event.newQueryData.currency.toUpperCase()
            : ""
        }`;
        event.reportedValue = event.value
          ? new Intl.NumberFormat("en-EN", {
              style: "currency",
              currency: "USD",
            }).format(event.value / eighteenDecimals)
          : "No Value";
        return event;
      default:
        event.reportedValueName = "New SpotPrice Type";
        event.reportedValue = "0";
        return event;
    }
  },
  Default: (event) => {
    switch (event.queryId) {
      case 8:
        event.reportedValueName =
          event._queryData.charAt(0).toUpperCase() + event._queryData.slice(1);
        event.reportedValue =
          event._queryData.charAt(0).toUpperCase() + event._queryData.slice(1);
        return event;
      default:
        event.reportedValueName = "New QueryData w/out JSON";
        event.reportedValue = "0";
        return event;
    }
  },
};
