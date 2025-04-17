
import Link from 'next/link'
import React from 'react'


export default function EmailForm() {
    return (
        <section id="contact" className='w-full  bg-neutral-300/80 dark:bg-neutral-800 pt-20' >
            <div className=' flex flex-col w-full max-w-7xl mx-auto'>
                <h1 className=' pt-5 my-5 px-5 w-full text-4xl font-bold dark:text-neutral-200 md:text-4xl lg:text-7xl text-slate-500'>Contact</h1>
                <div className='flex flex-col items-center mx-auto  my-10 pt-20   max-w-7xl border rounded-2xl w-full   bg-neutral-300/80 dark:bg-neutral-700'>

                    <form
                        action="https://formspree.io/f/xeoanalj"
                        method="POST"
                        target="_blank"
                        className="flex flex-col gap-4 max-w-md mx-auto my-10"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                            className="p-2  rounded-2xl border border-slate-600 dark:border-gray-200  focus:outline-blue-500"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required
                            className="p-2 rounded-2xl border  border-slate-600 dark:border-gray-200  focus:outline-blue-500"
                        />
                        <textarea
                            name="message"
                            placeholder="Your message"
                            required
                            className="p-2 rounded-2xl border  border-slate-600 dark:border-gray-200  focus:outline-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-2xl"
                        >
                            Send Email
                        </button>
                    </form>
                    <Link href="https://github.com/darrellbrand"
                        className="text-blue-600 hover:underline pt-4 m-4" >
                        Check Out My Github
                    </Link>
                </div>
            </div>
        </section>
    )
}