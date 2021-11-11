import { useCallback, useEffect, useRef } from "react";

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

function useSpecificTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}

export function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useSpecificTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []); //eslint-disable-line
}

export function usePrevious(value) {
  const currentRef = useRef(value);
  const previousRef = useRef();

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  } else {
    previousRef.current = currentRef.current;
  }
  return [currentRef.current, previousRef.current];
}
