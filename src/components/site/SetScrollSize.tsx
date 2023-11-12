import { useState, useEffect } from "react";

const SetScrollSize = (size: any) => {
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > size) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [animateHeader, size]);

  return animateHeader;
};

export default SetScrollSize;
