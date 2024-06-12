import { useEffect, useRef, useState } from "react";

const useAutoScroll = (
  scrollSpeed = 2,
  scrollDuration = 5000,
  pauseDuration = 60000
) => {
  const scrollContainer = useRef<HTMLDivElement | null>(null);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const startScrolling = () => {
    if (scrollContainer.current) {
      const { scrollWidth, clientWidth } = scrollContainer.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      scrollInterval.current = setInterval(() => {
        if (
          scrollContainer.current &&
          scrollContainer.current.scrollLeft < maxScrollLeft
        ) {
          scrollContainer.current.scrollLeft += scrollSpeed; // Adjust the speed here
        } else if (scrollContainer.current) {
          scrollContainer.current.scrollLeft = 0; // Reset to the start
        }
      }, 10); // Adjust the interval here

      setTimeout(() => {
        stopScrolling();
      }, scrollDuration); // Stop scrolling after scrollDuration milliseconds
    }
  };

  const stopScrolling = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
      setIsScrolling(false);

      scrollTimeout.current = setTimeout(() => {
        startScrolling();
        setIsScrolling(true);
      }, pauseDuration); // Restart scrolling after pauseDuration milliseconds
    }
  };

  useEffect(() => {
    // startScrolling();
    setIsScrolling(true);

    return () => {
      if (scrollInterval.current) clearInterval(scrollInterval.current);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return {
    scrollContainer,
    isScrolling,
    stopScrolling,
    startScrolling,
  };
};

export default useAutoScroll;
