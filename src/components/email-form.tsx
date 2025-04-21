
import Link from 'next/link'
import React from 'react'
import { TypewriterEffectDemo } from './typewriter-demo'


export default function EmailForm() {
    return (
        <section id="contact" className='w-full  bg-neutral-400/60 dark:bg-neutral-800 ' >
            <div className=' flex flex-col w-full max-w-7xl mx-auto mb-50'>
                <h1 className='my-20 w-full text-2xl font-bold dark:text-neutral-200 md:text-3xl lg:text-5xl text-neutral-600'>Contact</h1>
                <div className='pt-20 flex flex-col items-center mx-auto max-w-7xl border rounded-2xl w-full  bg-neutral-300/80 dark:bg-neutral-700'>
                        <TypewriterEffectDemo></TypewriterEffectDemo>
                    <form
                        action="https://formspree.io/f/xeoanalj"
                        method="POST"
                        target="_blank"
                        className="flex flex-col gap-4 max-w-md mx-auto mt-16"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                            className="p-2  rounded-2xl border border-neutral-600 dark:border-gray-200  focus:outline-blue-500"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required
                            className="p-2 rounded-2xl border  border-neutral-600 dark:border-gray-200  focus:outline-blue-500"
                        />
                        <textarea
                            name="message"
                            placeholder="Your message"
                            required
                            className="p-2 rounded-2xl border  border-neutral-600 dark:border-gray-200  focus:outline-blue-500"
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
                        Check out my Github
                    </Link>
                </div>
            </div>
        </section>
    )
}