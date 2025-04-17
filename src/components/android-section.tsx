"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button";


export default function AndroidSectionOne() {
    return (
        <section id="android" className="relative w-full pt-5  ">

            <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="flex flex-col mx-auto max-w-7xl">
                <h1 className=" mx-10 my-15 text-4xl font-bold dark:text-neutral-200 md:text-5xl lg:text-7xl text-slate-500 ">Recipe king android app</h1>
           

            <div className="flex flex-col md:flex-row relative items-center justify-center w-full gap-5    ">
                <Card className=" w-full items-center ">
                    <CardHeader className="w-full text-2xl">
                        <CardTitle className="pb-5 ">Category screen</CardTitle>
                        <CardDescription className="text-xl">Filter our recipe database by category.</CardDescription>
                    </CardHeader>
                    <CardContent className=" justify-center">
                        <img
                            src="/images/Screenshot_20250411_134037.png"
                            alt="Landing page preview"
                            className=" max-w-xs w-full h-full object-cover pt-10"
                        />
                    </CardContent>
                </Card>
                <Card className="w-full items-center ">
                    <CardHeader className="w-full text-2xl ">
                        <CardTitle className="">Generate recipe with AI</CardTitle>
                        <CardDescription className="text-2xl">Pick from common ingredients and generate an AI powered recipe.</CardDescription>
                    </CardHeader>
                    <CardContent className="justify-center">

                        <img
                            src="/images/Screenshot_20250411_134214.png"
                            alt="Landing page preview"
                            className=" max-w-xs w-full object-cover"
                        />
                    </CardContent>
                </Card>
                <Card className="w-full items-center">
                    <CardHeader className="w-full text-2xl">
                        <CardTitle className="">Search screen</CardTitle>
                        <CardDescription className="text-xl mb-20">Search our database of recipes.</CardDescription>
                    </CardHeader>
                    <CardContent className="justify-center">

                        <img
                            src="/images/Screenshot_20250411_134127.png"
                            alt="Landing page preview"
                            className=" max-w-xs w-full  object-cover"
                        />
                    </CardContent>
                </Card>
            </div>
            </div>
        </section>
    );
}
