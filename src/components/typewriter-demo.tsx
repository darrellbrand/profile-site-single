"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo() {
    const words = [
        {
            text: "Email",
            className: "text-neutral-600"
        },
        {
            text: "me",
            className: "text-android"
        },
        {
            text: "today!",
            className: "text-neutral-600"
        },

    ];
    return (
        <div className="text-amber-500">
            <TypewriterEffect words={words} />

        </div>
    );
}
