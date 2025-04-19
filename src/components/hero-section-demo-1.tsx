"use client";


import { motion } from "motion/react";

export default function HeroSectionOne() {
  return (
    <section id="home" className="pt-20 pb-5  bg-neutral-200/80 dark:bg-neutral-600/90 " >
      <div className="relative flex flex-col ">
        <div className="max-w-7xl mx-auto">
          <h1 className="relative z-10 mx-auto mt-10 max-w-4xl text-center text-2xl font-bold text-neutral-700 md:text-4xl lg:text-7xl dark:text-neutral-50 ">
            {"Hi. I'm Darrell, a native android and full stack web developer."
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-300"
          >
            I created this portfolio website with Next.js to showcase my full stack android and web applications for clients and employers.
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#profile">
              <button className="w-60 transform rounded-lg  px-6 py-2 font-medium text-neutral-300 bg-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-400 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-600">
                Learn More
              </button>
            </a>
            <a href="https://www.youtube.com/watch?v=R8hJNKSZNo0&t=8s">
              <button className="w-60 transform rounded-lg  text-neutral-300 bg-neutral-700   px-6 py-2 font-medium  transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-400 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-600">
                Check Out Demo Video
              </button>
            </a>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 1.2,
            }}
            className="relative z-10 mt-10 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="w-full overflow-hidden h-auto rounded-xl border border-gray-300 dark:border-gray-700">
              <img
                src="./images/Screenshot_20250416_181523.png"
                alt="Landing page preview"
                className="aspect-[16/9] y-fit w-fit object-cover "
                height={1000}
                width={1000}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


