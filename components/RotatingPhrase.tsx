"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Senior Product Manager roles",
  "freelance product work",
  "a good conversation about a hard problem",
];

export default function RotatingPhrase() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      const timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setVisible(true);
      }, 300);
      return () => clearTimeout(timeout);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`text-accent transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {phrases[index]}
    </span>
  );
}
