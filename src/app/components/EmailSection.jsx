'use client';
import { useState, useRef, useEffect } from 'react';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

import emailjs from '@emailjs/browser';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef();

    useEffect(() => {
        setIsSent(localStorage.getItem('isSent'));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const sendRes = await emailjs.sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
        );
        const data = sendRes.text;
        console.log(data);

        if (data === 'OK') {
            setIsLoading(false);
            setEmailSubmitted(true);
            localStorage.setItem('isSent', true);
            form.current.reset();
        } else {
            setIsLoading(false);
            form.current.reset();
            setSubmitError(true);
        }
    };

    const sendingMessage =
        emailSubmitted || isSent ? 'Message Sent' : 'Send Message';
    const sendingClasses =
        emailSubmitted || isSent || isLoading
            ? 'bg-gray-500 hover:cursor-not-allowed'
            : 'bg-primary-500 hover:bg-primary-600 ';

    const submitButton = (
        <button
            type="submit"
            disabled={Boolean(emailSubmitted || isSent)}
            className={`${
                isLoading
                    ? 'bg-yellow-500 hover:cursor-not-allowed'
                    : sendingClasses
            } text-white font-medium py-2.5 px-5 rounded-lg w-full`}
        >
            {isLoading ? 'Sending...' : sendingMessage}
        </button>
    );

    const submitButtonError = (
        <button
            type="submit"
            disabled={true}
            className="text-white font-medium bg-red-500 py-2.5  hover:cursor-not-allowed px-5 rounded-lg w-full"
        >
            Server Error! Try again later.
        </button>
    );

    const emailForm = (
        <form ref={form} className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
                <label
                    htmlFor="user_name"
                    className="text-white block mb-2 text-sm font-medium"
                >
                    Your name
                </label>
                <input
                    name="user_name"
                    type="text"
                    id="user_name"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="John"
                />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="user_email"
                    className="text-white block mb-2 text-sm font-medium"
                >
                    Your email
                </label>
                <input
                    name="user_email"
                    type="email"
                    id="user_email"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="john@webdev.com"
                />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="subject"
                    className="text-white block text-sm mb-2 font-medium"
                >
                    Subject
                </label>
                <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="SEO Optimization"
                />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="message"
                    className="text-white block text-sm mb-2 font-medium"
                >
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Let's talk about..."
                />
            </div>
            {!submitError && submitButton}
            {submitError && submitButtonError}
        </form>
    );

    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-5 bg-[#121212] bg-opacity-100">
                <h5 className="text-xl font-bold text-white my-2">
                    Let&apos;s Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {' '}
                    Ready to elevate your brand's digital presence? I'd love to
                    hear from you! Whether you&apos;re seeking expert web
                    development, compelling copywriting, or effective SEO
                    strategies, let&apos;s collaborate to achieve your goals.
                    Feel free to reach out for inquiries, consultations, or just
                    to discuss how we can transform your brand together.
                    <br />
                    <strong className="text-white">
                        If contract form does not work, contact me on LinedIn.
                    </strong>
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href={process.env.NEXT_PUBLIC_GITHUB} target="_blank">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link
                        href={process.env.NEXT_PUBLIC_LINKED_ID}
                        target="_blank"
                    >
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
            <div>{emailForm}</div>
        </section>
    );
};

export default EmailSection;
