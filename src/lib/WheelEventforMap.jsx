"use client";

import { useEffect } from "react";

const WheelEventListener = () => {
  useEffect(() => {
    // Add the passive wheel event listener
    const handleWheel = (event) => {
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return null; // This component does not render anything
};

export default WheelEventListener;