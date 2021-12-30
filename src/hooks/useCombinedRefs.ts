import { Ref, useEffect, useRef } from "react";

export const useCombinedRefs = <T>(...refs: Ref<T>[]) => {
  const targetRef = useRef();

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) {
        return;
      }

      if (typeof ref === "function") {
        // @ts-ignore
        ref(targetRef.current);
      } else {
        // @ts-ignore
        ref.current = targetRef.current; //eslint-disable-line
      }
    });
  }, [refs]);

  return targetRef;
};
