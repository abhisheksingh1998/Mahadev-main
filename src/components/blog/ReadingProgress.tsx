"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setWidth((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="reading-progress-container">
      <div
        className="reading-progress-bar"
        id="progressBar"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
