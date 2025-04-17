"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
       className: "text-android dark:text-blue-500"
    },
    {
      text: "with",
    },
    {
      text: "Darrell.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div>
      <TypewriterEffect words={words} />
     
    </div>
  );
}
