export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const dateArr = date.toString().split(" ");
  return `${dateArr[2]} ${dateArr[1]} @ ${dateArr[4]}`;
};

export const formatEvent = (eventString) => {
  const eventArray = eventString.match(/[A-Z][a-z]+/g);
  const newEventString = eventArray.join(" ");
  return newEventString;
};
