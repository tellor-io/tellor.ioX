import monthMapping from "./monthMapping.json";

export const sortDataByProperty = (prop, arr) => {
  arr.sort(function (a, b) {
    if (a[prop] < b[prop]) {
      return 1;
    } else if (a[prop] > b[prop]) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const reverseData = (prop, arr) => {
  arr.sort(function (a, b) {
    if (a[prop] > b[prop]) {
      return 1;
    } else if (a[prop] < b[prop]) {
      return -1;
    } else {
      return 0;
    }
  });

  return arr;
};

export const dateFormatter = (dateString) => {
  const dateArr = dateString.split("-");
  return `${monthMapping[dateArr[1]]} ${dateArr[2]} ${dateArr[0]}`;
};

export const urlFormatter = (title) => {
  title = title.replace(/\s/g, "-");
  return title;
};
