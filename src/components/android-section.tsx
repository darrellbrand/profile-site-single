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
                                <CardTitle className="pb-5">AI powered recipe app</CardTitle>
                                <CardDescription className="text-xl">Browse our recipe database or generate an AI assisted recipe.</CardDescription>
                                <div className=" mt-5  md:mt-15  flex-col md:flex-row  gap-4 flex items-center justify-center">
                                    <img src="./images/recipe.png"
                                        alt="Landing page preview"
                                        className=" max-w-24  w-full mx-auto object-cover rounded-2xl">
                                    </img>
                                    <a href="https://www.youtube.com/watch?v=R8hJNKSZNo0&t=29s" target="_blank" rel="noopener noreferrer">
                                        <button className=" transform rounded-2xl  text-neutral-300 bg-neutral-700   px-6 py-2  font-medium  transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-400 dark:bg-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-500">
                                           Watch Demo Video
                                        </button>
                                    </a>

                                </div>
                            </div>
                            <div className="flex-2 flex justify-center">
                                <img
                                    src="./images/recipe-ezgif.com-video-to-gif-converter.gif"
                                    alt="Landing page preview"
                                    className=" max-w-48 w-full mx-auto object-cover "
                                />
                            </div>
                        </div>
                    </Card>
                    <Card className=" w-full items-center p-10  bg-neutral-200/80 dark:bg-neutral-800/50 shadow-md">
                        <div className="flex w-full flex-col md:flex-row  gap-5 items-center justify-center">
                            <div className="flex-1 flex  flex-col text-2xl  text-neutral-600 dark:text-neutral-200">
                                <CardDescription className="text-xl font-bold my-5">Note Boss</CardDescription>
                                <CardTitle className="pb-5">Store Notes</CardTitle>
                                <CardDescription className="text-xl">Store your notes in local storage.</CardDescription>
                                <div className=" mt-5  md:mt-15 flex-col md:flex-row  gap-4 flex items-center justify-center ">
                                    <img src="./images/note.png"
                                        alt="Landing page preview"
                                        className=" max-w-24  w-full mx-auto object-cover rounded-2xl">
                                    </img>
                                    <a href="https://www.youtube.com/shorts/pOssuVUjEiw" target="_blank" rel="noopener noreferrer">
                                        <button className=" transform rounded-2xl  text-neutral-300 bg-neutral-700   px-6 py-2  font-medium  transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-400 dark:bg-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-500">
                                           Watch Demo Video
                                        </button>
                                    </a>

                                </div>
                            </div>
                            <div className="flex-2 flex">
                                <img
                                    src="./images/note-ezgif.com-video-to-gif-converter.gif"
                                    alt="Landing page preview"
                                    className="flex-1 max-w-48 w-full  mx-auto object-fit "
                                />
                            </div>
                        </div>
                    </Card>
                    <Card className=" w-full items-center p-10  bg-neutral-200/80 dark:bg-neutral-800/50 shadow-md">
                        <div className="flex w-full flex-col md:flex-row  gap-5 items-center justify-center">
                            <div className="flex-1 flex  flex-col text-2xl  text-neutral-600 dark:text-neutral-200">
                                <CardDescription className="text-xl font-bold my-5">Chat Client</CardDescription>
                                <CardTitle className="pb-5">Getstream SDK Integration</CardTitle>
                                <CardDescription className="text-xl">Android messaging app featuring the Getstream SDK.</CardDescription>

                                <div className=" mt-5  md:mt-15   flex-col md:flex-row  gap-4 flex items-center justify-center ">
                                    <img src="./images/chat.png"
                                        alt="Landing page preview"
                                        className=" max-w-24  w-full mx-auto object-cover rounded-2xl">
                                    </img>
                                    <a href="https://youtube.com/shorts/wFMom2i1Nzc?feature=share" target="_blank" rel="noopener noreferrer">
                                        <button className=" transform rounded-2xl  text-neutral-300 bg-neutral-700   px-6 py-2  font-medium  transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-400 dark:bg-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-500">
                                            Watch Demo Video
                                        </button>
                                    </a>

                                </div>
                            </div>
                            <div className="flex-2 flex">
                                <img
                                    src="./images/chat-ezgif.com-video-to-gif-converter.gif"
                                    alt="Landing page preview"
                                    className="flex-1 max-w-48 w-full  mx-auto object-fit "
                                />
                            </div>
                        </div>
                    </Card>
                    <Card className=" w-full items-center p-10  bg-neutral-200/80 dark:bg-neutral-800/50 shadow-md">
                        <div className="flex w-full flex-col md:flex-row  gap-5 items-center justify-center">
                            <div className="flex-1 flex  flex-col text-2xl  text-neutral-600 dark:text-neutral-200">
                                <CardDescription className="text-xl font-bold my-5">News Boss</CardDescription>
                                <CardTitle className="pb-5">Read News Articles </CardTitle>
                                <CardDescription className="text-xl">Read news articles. Based on the metro zone app.</CardDescription>

                                <div className=" mt-5  md:mt-15   flex-col md:flex-row  gap-4 flex items-center justify-center ">

                                    <img src="./images/news.png"
                                        alt="Landing page preview"
                                        className="max-w-24  w-full mx-auto object-cover rounded-2xl">
                                    </img>
                                    <a href="https://youtube.com/shorts/6Y1SmeXgj-w?feature=share"
                                        target="_blank" rel="noopener noreferrer">
                                        <button className="  transform rounded-2xl  text-neutral-300 bg-neutral-700   px-6 py-2 font-medium  transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-400 dark:bg-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-500">
                                           Watch Demo Video
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="flex-2 flex">
                                <img
                                    src="./images/news-ezgif.com-video-to-gif-converter.gif"
                                    alt="Landing page preview"
                                    className="flex-1 max-w-48 w-full  mx-auto object-fit "
                                />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
