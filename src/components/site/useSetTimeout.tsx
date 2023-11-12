import { useEffect, useRef } from "react";

type CallbackFunction = () => void;

function useSetTimeout(callback: CallbackFunction, delay: number | null) {
  const callbackRef = useRef<CallbackFunction | null>(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const timeoutId = setTimeout(() => {
        if (callbackRef.current) {
          callbackRef.current();
        }
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [delay]);
}

export default useSetTimeout;
