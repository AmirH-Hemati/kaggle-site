import { useEffect, useRef } from "react";

export function useClickOutSide(close) {
  const ref = useRef();

  useEffect(() => {
    function click(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        close?.();
      }
    }
    document.addEventListener("click", click, true);

    return () => document.removeEventListener("click", click, true);
  }, [close]);

  return ref;
}
