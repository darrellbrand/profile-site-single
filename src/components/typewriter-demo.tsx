"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo() {
    const words = [
        {
            text: "Email",
        },
        {
            text: "me",
            className: "text-android"
        },
        {
            text: "today!",
        },
       
    ];
    return (
        <div>
            <TypewriterEffect words={words} />

        </div>
    );
}
