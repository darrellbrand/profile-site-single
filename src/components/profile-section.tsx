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
        <section id="profile" className="relative w-full  my-5  ">
            <div className="w-full flex  ">
                <div className="w-full relative flex justify-center mx-auto  ">
                    <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
                    </div>
                    <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
                        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                    </div>
                    <div className="flex flex-col w-full p-5 gap-5  mx-auto max-w-7xl ">
                        <h1 className=" text-center text-4xl font-bold dark:text-neutral-100 md:text-4xl lg:text-7xl text-slate-500 self-start mx-5">About</h1>
                        <Card className=" w-full items-center px-5 pt-10  ">
                            <CardHeader className="w-full text-2xl ">
                                <CardTitle className="pb-5 whitespace-normal sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis ">Darrell Friday Software Engineer</CardTitle>

                            </CardHeader>
                            <CardContent className="flex flex-col  sm:flex-col md:flex-col gap-10 justify-between items-center">
                                <img
                                    src="/images/1744560812159.jpg"
                                    alt="Landing page preview"
                                    className=" max-w-xs w-full h-full object-cover rounded-full"
                                />
                                <CardDescription className="text-xl ">
                                    With 5+ years of hands-on experience, I specialize in building modern, scalable applications across mobile and web platforms. On Android, I leverage Kotlin, Jetpack Compose, MVVM, and Dagger Hilt to craft smooth, responsive user experiences backed by robust architecture and test automation (Appium). On the web, I develop sleek frontends using Next.js and integrate them with secure, high-performance Spring Boot backends. I bring a unique blend of software engineering and electronics expertise to every project—focused on quality, reliability, and forward-thinking solutions.</CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
