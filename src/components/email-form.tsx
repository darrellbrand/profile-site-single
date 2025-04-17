
import Link from 'next/link'
import React from 'react'


export default function EmailForm() {
    return (
        <section id="contact" className='w-full' >
           
            <div className='flex flex-col items-center mx-auto  my-5   max-w-7xl border rounded-4xl w-full'>
            <h1 className=' pt-5 my-5 px-5 w-full text-4xl font-bold dark:text-neutral-200 md:text-4xl lg:text-7xl text-slate-500'>Contact</h1>
                <form
                    action="https://formspree.io/f/xeoanalj"
                    method="POST"
                    target="_blank"
                    className="flex flex-col gap-4 max-w-md mx-auto  "
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        className="p-2 rounded-full border"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                        className="p-2 rounded-full border"
                    />
                    <textarea
                        name="message"
                        placeholder="Your message"
                        required
                        className="p-2 rounded-full border"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
                    >
                        Send Email
                    </button>
                </form>
                <Link href="https://github.com/darrellbrand"
                    className="text-blue-600 hover:underline pt-4 m-4" >
                    Check Out My Github
                </Link>
            </div>
        </section>
    )
}