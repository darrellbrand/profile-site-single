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
        <section id="profile" className="relative w-full my-10  ">
            <div className="w-full flex  ">
                <div className="w-full relative flex justify-center mx-auto  ">
                    <div className="flex flex-col w-full  gap-5 pb-10   mx-auto max-w-7xl ">
                        <h1 className=" text-center text-4xl font-bold dark:text-neutral-100 md:text-4xl lg:text-7xl text-slate-500 self-start mx-5">About</h1>
                        <Card className=" w-full items-center px-5 pt-10  ">
                            <CardHeader className="w-full text-2xl ">
                                <CardTitle className="pb-5 whitespace-normal sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis ">Darrell Friday Software Engineer.</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col  sm:flex-col md:flex-col gap-10 justify-between items-center">
                                <img
                                    src="/profile-site-static/images/1744560812159.jpg"
                                    alt="Landing page preview"
                                    className=" max-w-xs w-full h-full object-cover rounded-full"
                                />
                                <CardDescription className="text-xl  max-w-4xl">
                                    Experienced in building Android and full-stack web applications with a strong focus on performance and maintainability. At ESChat, I worked on Android apps using Kotlin, Java, Jetpack Compose, MVVM, and Dagger Hilt, along with writing automation tests using Appium to ensure quality.
                                    I also develop web frontends with Next.js and connect them to secure, scalable Spring Boot backends. Comfortable working across multiple languages including Python, Lua, Bash, C/C++, and NSIS, I bring a solid engineering foundation and a detail-oriented mindset to every project.</CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
