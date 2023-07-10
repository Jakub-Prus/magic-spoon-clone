import { useEffect } from "react";

const useScrollPosition = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log("Scroll position:", scrollPosition);
      // Additional logic or actions based on the scroll position can be added here
    };

    // Add event listener for 'scroll' event
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useScrollPosition;
