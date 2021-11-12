import { useRef } from "react";

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

export function usePrevious(value) {
  console.log(value);
  const currentRef = useRef(value);
  const previousRef = useRef();
  console.log(currentRef.current);

  if (currentRef.current !== value && value !== 0) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  } else {
    previousRef.current = currentRef.current;
  }
  return [currentRef.current, previousRef.current];
}
