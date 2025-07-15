"use client";

import { useMemo } from "react";

export const BlurText = ({ word, className, duration = 1 }) => {
  const words = useMemo(() => {
    return word.split("\n").map((line) => line.split(" "));
  }, [word]);

  return (
    <div className={className}>
      {words.map((line, lineIndex) => (
        <div key={lineIndex} className="block">
          {line.map((word, wordIndex) => (
            <span
              key={wordIndex}
              className="inline-block whitespace-nowrap mr-2 animate-fadeInUp"
              style={{
                animationDelay: `${(lineIndex * line.length + wordIndex) * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              {word}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};