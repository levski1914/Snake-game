import { useEffect, useRef } from "react";

function useInterval(callback: () => void, delay: number | null) {
  const savedCallBack = useRef(callback);
  useEffect(() => {
    savedCallBack.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) {
      return;
    }
    const id = setInterval(() => savedCallBack.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default useInterval;
