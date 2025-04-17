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
        <div className="w-full   bg-neutral-800/80 dark:bg-neutral-200/80 pb-5">
            <div className="flex flex-col w-full gap-5 mx-auto max-w-7xl">
                <h1 className="pt-20 pb-5   my-5 text-center text-2xl font-bold dark:text-slate-900 md:text-4xl lg:text-7xl text-slate-300 self-start">Recipe king android app</h1>
                <div className="flex relative w-full gap-10    ">
                    <Card className=" w-full items-center">
                        <CardHeader className="w-full text-4xl">
                            <CardTitle className="pb-5 whitespace-normal sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis ">Category screen</CardTitle>
                            <CardDescription className="text-2xl">Filter our recipe database by category.</CardDescription>

                        </CardHeader>
                        <CardContent className="flex flex-col gap-5 items-center">
                            <img
                                src="/images/Screenshot_20250411_134037.png"
                                alt="Landing page preview"
                                className=" max-w-xs w-full h-full object-cover"
                            />
                        </CardContent>
                    </Card>
                    <Card className="w-full items-center ">
                        <CardHeader className="w-full text-4xl">
                            <CardTitle className="pb-5 whitespace-normal sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis">Generate recipe with AI</CardTitle>
                            <CardDescription className="text-2xl">Pick from common ingredients and generate an AI powered recipe</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-5 items-center">

                            <img
                                src="/images/Screenshot_20250411_134214.png"
                                alt="Landing page preview"
                                className=" max-w-xs w-full  object-cover"
                            />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
