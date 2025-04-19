"use client";
import {
    Card,
    CardDescription,
} from "@/components/ui/card"



export default function ProfileSectionOne() {
    return (
        <section id="profile" className="relative w-full   bg-neutral-200 dark:bg-neutral-800">
            <div className="w-full flex my-5">
                <div className="w-full relative flex justify-center mx-auto  ">
                    <div className="flex flex-col w-full mx-auto max-w-7xl ">
                        <h1 className=" my-20 text-center text-2xl font-bold dark:text-neutral-300 md:text-3xl lg:text-5xl text-neutral-600 self-start ">About</h1>
                        <Card className=" w-full items-center px-5 pt-10  bg-neutral-300/80 dark:bg-neutral-600 shadow-md">
                            <div className="w-full  text-2xl ">
                                <h1 className="pb-5 text-center whitespace-normal sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis text-xl  font-bold dark:text-neutral-100 md:text-2xl lg:text-4xl text-neutral-600 ">Darrell Friday - Software Engineer</h1>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between items-center mx-15">
                                <div className="flex-1 flex justify-center">
                                    <img
                                        src="./images/1744560812159.jpg"
                                        alt="Landing page preview"
                                        className=" max-w-xs   object-cover rounded-4xl"
                                    />
                                </div>
                                <div className="flex-1 flex justify-center my-10">
                                    <CardDescription className="text-xl text-center  md:text-xl lg:text-2xl dark:text-neutral-300  text-neutral-500">
                                        Experienced in building Android and full-stack web applications with a strong focus on performance and maintainability. At ESChat, I worked on Android apps using Kotlin, Java, Jetpack Compose, MVVM, and Dagger Hilt, along with writing automation tests using Appium to ensure quality.
                                        I also develop web frontends with Next.js and connect them to secure, scalable Spring Boot backends. Comfortable working across multiple languages including Python, Lua, Bash, C/C++, and NSIS, I bring a solid engineering foundation and a detail-oriented mindset to every project.</CardDescription>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
