"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"



export default function ProfileSectionOne() {
    return (
        <section id="profile" className="relative w-full pt-20  bg-neutral-200 dark:bg-neutral-800">
            <div className="w-full flex  ">
                <div className="w-full relative flex justify-center mx-auto  ">
                    <div className="flex flex-col w-full  gap-5 pb-10   mx-auto max-w-7xl ">
                        <h1 className=" my-10 text-center text-2xl font-bold dark:text-neutral-300 md:text-3xl lg:text-5xl text-neutral-600 self-start mx-5">About</h1>
                        <Card className=" w-full items-center px-5 pt-10  bg-neutral-300/80 dark:bg-neutral-600 ">
                            <CardHeader className="w-full text-2xl ">
                                <CardTitle className="pb-5 text-center whitespace-normal sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis text-3xl  font-bold dark:text-neutral-100 md:text-4xl lg:text-6xl text-neutral-600 ">Darrell Friday - Software Engineer</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col  sm:flex-col md:flex-col gap-10 justify-between items-center">
                                <div className="flex items-center gap-10">
                                    <img
                                        src="./images/1744560812159.jpg"
                                        alt="Landing page preview"
                                        className=" max-w-xs w-full h-full object-cover rounded-4xl"
                                    />
                                    <div className="flex flex-col">

                                        <CardDescription className="text-xl text-center  md:text-xl lg:text-2xl dark:text-neutral-300  text-neutral-500">
                                            Experienced in building Android and full-stack web applications with a strong focus on performance and maintainability. At ESChat, I worked on Android apps using Kotlin, Java, Jetpack Compose, MVVM, and Dagger Hilt, along with writing automation tests using Appium to ensure quality.
                                            I also develop web frontends with Next.js and connect them to secure, scalable Spring Boot backends. Comfortable working across multiple languages including Python, Lua, Bash, C/C++, and NSIS, I bring a solid engineering foundation and a detail-oriented mindset to every project.</CardDescription>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
