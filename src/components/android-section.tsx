"use client";
import {
    Card,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"


export default function AndroidSectionOne() {
    return (
        <section id="android" className="relative w-full h-full bg-neutral-300/80 dark:bg-neutral-700">
            <div className="flex flex-col mx-auto max-w-7xl">
                <h1 className="  py-20  text-2xl font-bold dark:text-neutral-200 md:text-3xl lg:text-5xl text-neutral-600 ">Android</h1>
                <div className="flex flex-col  items-stretch justify-center w-full gap-5 my-5 ">
                    <Card className=" w-full items-center p-10  bg-neutral-200/80 dark:bg-neutral-800/50  shadow-md">
                        <div className="w-full flex flex-col md:flex-row  gap-5">
                            <div className="flex  flex-col text-2xl flex-1  text-neutral-600 dark:text-neutral-200">
                            <CardDescription className="text-xl font-bold my-5">Recipe King</CardDescription>
                                <CardTitle className="pb-5">Category screen</CardTitle>
                                <CardDescription className="text-xl">Filter recipes by category.</CardDescription>
                                <div className="flex justify-center md:justify-start">
                                <a href="https://www.youtube.com/watch?v=R8hJNKSZNo0&t=8s">
                                    <button className=" mt-10  md:mt-80 transform rounded-lg  text-neutral-300 bg-neutral-700   px-6 py-2 font-medium  transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-400 dark:bg-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-500">
                                        Demo Video
                                    </button>
                                </a>
                                </div>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <img
                                    src="./images/Screenshot_20250411_134037.png"
                                    alt="Landing page preview"
                                    className=" max-w-64 w-full mx-auto object-cover "
                                />
                            </div>
                        </div>
                    </Card>
                    <Card className=" w-full items-center p-10  bg-neutral-200/80 dark:bg-neutral-800/50 shadow-md">
                        <div className="flex w-full flex-col md:flex-row  gap-5 justify-center">
                            <div className=" flex-1 flex    flex-col text-2xl  text-neutral-600 dark:text-neutral-200">
                            <CardDescription className="text-xl font-bold my-5">Recipe King</CardDescription>
                                <CardTitle className="pb-5">Search screen</CardTitle>
                                <CardDescription className="text-xl">Search our database of recipes.</CardDescription>
                                <div className=" md:mt-80   flex justify-center md:justify-start">
                                <a href="https://www.youtube.com/watch?v=R8hJNKSZNo0&t=8s">
                                    <button className=" m-5 transform rounded-lg  text-neutral-300 bg-neutral-700   px-6 py-2 font-medium  transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-400 dark:bg-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-500">
                                        Demo Video
                                    </button>
                                </a>
                                </div>
                            </div>
                            <div className="  flex-1 flex">
                                <img
                                    src="./images/Screenshot_20250411_134127.png"
                                    alt="Landing page preview"
                                    className="w-full max-w-64  mx-auto object-cover "
                                />
                            </div>
                        </div>
                    </Card>
                    <Card className=" w-full items-center p-10  bg-neutral-200/80 dark:bg-neutral-800/50 shadow-md">
                        <div className="flex w-full flex-col md:flex-row  gap-5 items-center justify-center">
                            <div className="flex-1 flex  flex-col text-2xl  text-neutral-600 dark:text-neutral-200">
                            <CardDescription className="text-xl font-bold my-5">Recipe King</CardDescription>
                                <CardTitle className="pb-5">Generate recipe screen</CardTitle>
                                <CardDescription className="text-xl">Generate an AI assisted recipe.</CardDescription>
                                <div className=" md:mt-80   flex justify-center md:justify-start">
                                <a href="https://www.youtube.com/watch?v=R8hJNKSZNo0&t=8s">
                                    <button className=" m-5 transform rounded-lg  text-neutral-300 bg-neutral-700   px-6 py-2 font-medium  transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-400 dark:bg-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-500">
                                        Demo Video
                                    </button>
                                </a>
                                </div>
                            </div>
                            <div className="flex-1 flex">
                                <img
                                    src="./images/Screenshot_20250411_134214.png"
                                    alt="Landing page preview"
                                    className="flex-1 max-w-64 w-full  mx-auto object-fit "
                                />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
