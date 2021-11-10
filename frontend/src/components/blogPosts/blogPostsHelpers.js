export const reverseData = (prop, arr) => {
  let reversedArray = [...arr].sort(function (a, b) {
    if (a[prop] > b[prop]) {
      return -1;
    } else if (a[prop] < b[prop]) {
      return 1;
    } else {
      return 0;
    }
  });

  return reversedArray;
};

export const titleFormatter = (title) => {
  title = title.replace(/:/gm, ".");
  return title;
};
