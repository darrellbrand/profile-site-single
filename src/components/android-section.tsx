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
        <section id="android" className="relative w-full h-full   bg-neutral-400/80 dark:bg-neutral-700">
            <div className="flex flex-col mx-auto max-w-7xl">
                <h1 className="my-10 text-4xl font-bold dark:text-neutral-200 md:text-5xl lg:text-7xl text-slate-500 ">Recipe king android app</h1>
           

            <div className="flex flex-col md:flex-row relative  items-stretch justify-center w-full gap-5 pb-10 ">
                <Card className=" w-full items-center">
                    <CardHeader className="w-full text-2xl">
                        <CardTitle>Category screen</CardTitle>
                        <CardDescription className="text-xl">Filter our recipe database by category.</CardDescription>
                    </CardHeader>
                    <CardContent className=" justify-center flex-1">
                        <img
                            src="/images/Screenshot_20250411_134037.png"
                            alt="Landing page preview"
                            className=" max-w-xs w-full  object-cover "
                        />
                    </CardContent>
                </Card>
                <Card className="w-full items-center ">
                    <CardHeader className="w-full text-2xl ">
                        <CardTitle className="">Generate recipe with AI</CardTitle>
                        <CardDescription className="text-2xl">Pick from common ingredients and generate an AI powered recipe.</CardDescription>
                    </CardHeader>
                    <CardContent className="justify-center ">

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
                        <CardDescription className="text-xl ">Search our database of recipes.</CardDescription>
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
