"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function AndroidSectionOne() {
    return (
        <section id="android" className="relative w-full h-full pt-20  bg-neutral-300/80 dark:bg-neutral-700">
            <div className="flex flex-col mx-auto max-w-7xl">
                <h1 className="my-10 px-5 text-2xl font-bold dark:text-neutral-200 md:text-3xl lg:text-5xl text-neutral-600 ">Android recipe app</h1>
           

            <div className="flex flex-col md:flex-row relative text-center  items-stretch justify-center w-full gap-5 pb-10 ">
                <Card className=" w-full items-center  bg-neutral-200/80 dark:bg-neutral-800">
                    <CardHeader className="w-full text-2xl text-neutral-600 dark:text-neutral-200">
                        <CardTitle>Category screen</CardTitle>
                        <CardDescription className="text-xl">Filter our recipe database by category.</CardDescription>
                    </CardHeader>
                    <CardContent className=" justify-center flex-1">
                        <img
                            src="./images/Screenshot_20250411_134037.png"
                            alt="Landing page preview"
                            className=" max-w-xs w-full  object-cover "
                        />
                    </CardContent>
                </Card>
                <Card className="w-full items-center  bg-neutral-200/80 dark:bg-neutral-800">
                    <CardHeader className="w-full text-2xl text-neutral-600 dark:text-neutral-200">
                        <CardTitle className="">Generate recipe with AI</CardTitle>
                        <CardDescription className="text-xl">Pick from common ingredients and generate an AI powered recipe.</CardDescription>
                    </CardHeader>
                    <CardContent className="justify-center ">

                        <img
                            src="./images/Screenshot_20250411_134214.png"
                            alt="Landing page preview"
                            className=" max-w-xs w-full object-cover"
                        />
                    </CardContent>
                </Card>
                <Card className="w-full items-center  bg-neutral-200/80 dark:bg-neutral-800">
                    <CardHeader className="w-full text-2xl text-neutral-600 dark:text-neutral-200">
                        <CardTitle className="">Search screen</CardTitle>
                        <CardDescription className="text-xl ">Search our database of recipes.</CardDescription>
                    </CardHeader>
                    <CardContent className="justify-center">

                        <img
                            src="./images/Screenshot_20250411_134127.png"
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
