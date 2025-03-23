import React, { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void; // Callback when typing is complete
  animate?: boolean;
}

export const TypingText: React.FC<TypingTextProps> = ({ text, speed = 50, onComplete, animate = true }) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (animate) {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex(index + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else if (onComplete) {
        onComplete(); // Trigger the callback when typing is complete
      }
    } else {
      setDisplayedText(text)
      if (onComplete) {
        onComplete(); // Trigger the callback when typing is complete
      }
    }
  }, [index, text, speed, onComplete, animate]);

  return <span>{displayedText}</span>;
};