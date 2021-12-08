import { add } from "lodash";

const monthTable = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};

export const formatDate = (dateString) => {
  const date = new Date(dateString * 1000);
  const dateArr = date.toString().split(" ");
  return `${dateArr[2]}/${monthTable[dateArr[1]]}/${dateArr[3]}, ${dateArr[4]}`;
};

export const shortenAddr = (addr, type) => {
  switch (type) {
    case "shorten":
      return addr.slice(0, 6) + "..." + addr.slice(-4);
    case "url":
      return addr.slice(0, 6) + addr.slice(-4);
    default:
      return "Not valid type in shortenAddr func";
  }
};
