"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"



export default function ProfileSectionOne() {
    return (
        <div className="w-full pt-10  bg-neutral-600/80 dark:bg-neutral-400/80 mb-10 pb-5">
            <div className="flex flex-col w-full gap-5 mx-auto max-w-7xl ">
                <h1 className=" text-center text-2xl font-bold dark:text-black md:text-4xl lg:text-7xl text-slate-200 self-start">About</h1>
                <Card className=" w-full items-center px-5 pt-10  ">
                    <CardHeader className="w-full text-4xl ">
                        <CardTitle className="pb-5 whitespace-normal sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis ">Darrell Friday Software Engineer</CardTitle>

                    </CardHeader>
                    <CardContent className="flex gap-10 justify-between items-center">
                        <img
                            src="/images/1744560812159.jpg"
                            alt="Landing page preview"
                            className=" max-w-xs w-full h-full object-cover rounded-full"
                        />
                        <CardDescription className="text-2xl ">
                               With 5+ years of hands-on experience, I specialize in building modern, scalable applications across mobile and web platforms. On Android, I leverage Kotlin, Jetpack Compose, MVVM, and Dagger Hilt to craft smooth, responsive user experiences backed by robust architecture and test automation (Appium). On the web, I develop sleek frontends using Next.js and integrate them with secure, high-performance Spring Boot backends. I bring a unique blend of software engineering and electronics expertise to every project—focused on quality, reliability, and forward-thinking solutions.</CardDescription>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
