import { useRef } from "react";

export function usePrevious(value) {
  const currentRef = useRef(value);
  const previousRef = useRef();

  if (currentRef.current !== value && value != 0) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }

  return [currentRef.current, previousRef.current];
}

export function usePreviousFeeds(value) {
  const currentRef = useRef(value);
  const previousRef = useRef();

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  } else if (!previousRef.current) {
    previousRef.current = currentRef.current;
  }

  return [currentRef.current, previousRef.current];
}
