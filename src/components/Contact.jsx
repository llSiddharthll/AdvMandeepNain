import React from "react";

const Contact = () => {
    return (
        <>
            <section class="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px] dark:bg-dark">
                <div class="container mx-auto px-4 ">
                    <div class="-mx-4 flex flex-wrap lg:justify-between">
                        <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
                            <div class="mb-12 max-w-[570px] lg:mb-0">
                                <span class="mb-4 block text-base font-semibol20 text-[var(--primary)]">
                                    Contact Us
                                </span>
                                <h2 class="mb-6 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                    GET IN TOUCH WITH US
                                </h2>
                                <p class="mb-9 text-base leading-relaxed text-[var(--text)]">
                                    We are here to simplify your tax and GST compliance. Reach out to Mandeep Nain & Associates for personalized consultancy tailored to your financial and regulatory needs.
                                </p>

                                <div class="mb-8 flex w-full max-w-[450px]">
                                    <div class="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-sm bg-[var(--primary)]/20 text-[var(--primary)] sm:h-[70px] sm:max-w-[70px]">
                                        
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="var(--primary)" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.6 11.8L17.7 3.5C16.65 2.85 15.3 2.85 14.3 3.5L1.4 11.8C0.9 12.15 0.75 12.85 1.05 13.35C1.4 13.85 2.1 14 2.6 13.7L3.45 13.15V25.8C3.45 27.55 4.85 28.95 6.6 28.95H25.4C27.15 28.95 28.55 27.55 28.55 25.8V13.15L29.4 13.7C29.6 13.8 29.8 13.9 30 13.9C30.35 13.9 30.75 13.7 30.95 13.4C31.3 12.85 31.15 12.15 30.6 11.8ZM13.35 26.75V18.5C13.35 18 13.75 17.6 14.25 17.6H17.75C18.25 17.6 18.65 18 18.65 18.5V26.75H13.35Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div class="w-full">
                                        <h4 class="mb-1 text-xl font-bold text-dark">Our Location</h4>
                                        <p class="text-base text-[var(--text)]">
                                            SCO-45, Cabin No. 20, 2nd Floor, Sector-11, Panchkula, Haryana, PIN: 134109
                                        </p>
                                    </div>
                                </div>

                                <div class="mb-8 flex w-full max-w-[450px]">
                                    <div class="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-sm bg-[var(--primary)]/20 text-[var(--primary)] sm:h-[70px] sm:max-w-[70px]">
                                        
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="var(--primary)" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24.3 31.15C22.95 31.15 21.4 30.8 19.7 30.15C16.3 28.8 12.55 26.2 9.2 22.85C5.85 19.5 3.25 15.75 1.9 12.3C0.4 8.6 0.55 5.55 2.3 3.85L6.7 1.2C7.75 0.6 9.1 0.9 9.8 1.9L12.75 6.3C13.45 7.35 13.15 8.75 12.15 9.45L10.35 10.7C11.65 12.8 15.35 17.95 21.25 21.65L22.35 20.05C23.2 18.85 24.55 18.5 25.65 19.25L30.05 22.2C31.05 22.9 31.35 24.25 30.75 25.3L28.25 29.5C27.2 30.65 25.9 31.15 24.3 31.15Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div class="w-full">
                                        <h4 class="mb-1 text-xl font-bold text-dark">Phone Number</h4>
                                        <p class="text-base text-[var(--text)]">+91-98765-43210</p> 
                                    </div>
                                </div>

                                <div class="mb-8 flex w-full max-w-[450px]">
                                    <div class="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-sm bg-[var(--primary)]/20 text-[var(--primary)] sm:h-[70px] sm:max-w-[70px]">
                                        
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="var(--primary)" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28 4.8H4C2.3 4.8 0.85 6.2 0.85 7.95V24.15C0.85 25.85 2.25 27.3 4 27.3H28C29.7 27.3 31.15 25.9 31.15 24.15V7.9C31.15 6.2 29.7 4.8 28 4.8ZM16 14.85L3.85 7.05H28.15L16 14.85Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div class="w-full">
                                        <h4 class="mb-1 text-xl font-bold text-dark">Email Address</h4>
                                        <p class="text-base text-[var(--text)]">advmandeepnain@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div class="relative rounded-lg bg-white p-8 shadow-lg sm:p-12 dark:bg-dark-2">
                                <form>
                                    <div class="mb-6">
                                        <input type="text" placeholder="Your Name"
                                            class="w-full rounded-sm border border-stroke px-[14px] py-3 text-base text-[var(--text)] outline-hidden focus:border-[var(--primary)] dark:border-dark-3 dark:bg-dark" />
                                    </div>
                                    <div class="mb-6">
                                        <input type="email" placeholder="Your Email"
                                            class="w-full rounded-sm border border-stroke px-[14px] py-3 text-base text-[var(--text)] outline-hidden focus:border-[var(--primary)] dark:border-dark-3 dark:bg-dark" />
                                    </div>
                                    <div class="mb-6">
                                        <input type="text" placeholder="Your Phone"
                                            class="w-full rounded-sm border border-stroke px-[14px] py-3 text-base text-[var(--text)] outline-hidden focus:border-[var(--primary)] dark:border-dark-3 dark:bg-dark" />
                                    </div>
                                    <div class="mb-6">
                                        <textarea rows="6" placeholder="Your Message"
                                            class="w-full resize-none rounded-sm border border-stroke px-[14px] py-3 text-base text-[var(--text)] outline-hidden focus:border-[var(--primary)] dark:border-dark-3 dark:bg-dark"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit"
                                            class="w-full rounded-sm border border-[var(--primary)] bg-[var(--primary)] p-3 text-white transition hover:bg-[var(--primary)]/90">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                                <div>
                                    <span class="absolute -right-9 -top-10 z-[-1]">
                                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z" fill="var(--primary)" />
                                        </svg>
                                    </span>
                                    <span class="absolute -right-10 top-[90px] z-[-1]">
                                        <svg width="34" height="134" viewBox="0 0 34 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)" fill="var(--primary)" />
                                            <circle cx="31.9993" cy="117.333" r="1.66667" transform="rotate(180 31.9993 117.333)"
                                                fill="var(--primary)" />
                                            <circle cx="31.9993" cy="102.667" r="1.66667" transform="rotate(180 31.9993 102.667)"
                                                fill="var(--primary)" />
                                            <circle cx="31.9993" cy="88" r="1.66667" transform="rotate(180 31.9993 88)" fill="var(--primary)" />
                                            <circle cx="31.9993" cy="73.3333" r="1.66667" transform="rotate(180 31.9993 73.3333)"
                                                fill="var(--primary)" />
                                            <circle cx="31.9993" cy="45" r="1.66667" transform="rotate(180 31.9993 45)" fill="var(--primary)" />
                                            <circle cx="31.9993" cy="16" r="1.66667" transform="rotate(180 31.9993 16)" fill="var(--primary)" />
                                            <circle cx="31.9993" cy="59" r="1.66667" transform="rotate(180 31.9993 59)" fill="var(--primary)" />
                                            <circle cx="31.9993" cy="30.6666" r="1.66667" transform="rotate(180 31.9993 30.6666)"
                                                fill="var(--primary)" />
                                            <circle cx="31.9993" cy="1.66665" r="1.66667" transform="rotate(180 31.9993 1.66665)"
                                                fill="var(--primary)" />
                                            <circle cx="17.3333" cy="132" r="1.66667" transform="rotate(180 17.3333 132)" fill="var(--primary)" />
                                            <circle cx="17.3333" cy="117.333" r="1.66667" transform="rotate(180 17.3333 117.333)"
                                                fill="var(--primary)" />
                                            <circle cx="17.3333" cy="102.667" r="1.66667" transform="rotate(180 17.3333 102.667)"
                                                fill="var(--primary)" />
                                            <circle cx="17.3333" cy="88" r="1.66667" transform="rotate(180 17.3333 88)" fill="var(--primary)" />
                                            <circle cx="17.3333" cy="73.3333" r="1.66667" transform="rotate(180 17.3333 73.3333)"
                                                fill="var(--primary)" />
                                            <circle cx="17.3333" cy="45" r="1.66667" transform="rotate(180 17.3333 45)" fill="var(--primary)" />
                                            <circle cx="17.3333" cy="16" r="1.66667" transform="rotate(180 17.3333 16)" fill="var(--primary)" />
                                            <circle cx="17.3333" cy="59" r="1.66667" transform="rotate(180 17.3333 59)" fill="var(--primary)" />
                                            <circle cx="17.3333" cy="30.6666" r="1.66667" transform="rotate(180 17.3333 30.6666)"
                                                fill="var(--primary)" />
                                            <circle cx="17.3333" cy="1.66665" r="1.66667" transform="rotate(180 17.3333 1.66665)"
                                                fill="var(--primary)" />
                                            <circle cx="2.66536" cy="132" r="1.66667" transform="rotate(180 2.66536 132)" fill="var(--primary)" />
                                            <circle cx="2.66536" cy="117.333" r="1.66667" transform="rotate(180 2.66536 117.333)"
                                                fill="var(--primary)" />
                                            <circle cx="2.66536" cy="102.667" r="1.66667" transform="rotate(180 2.66536 102.667)"
                                                fill="var(--primary)" />
                                            <circle cx="2.66536" cy="88" r="1.66667" transform="rotate(180 2.66536 88)" fill="var(--primary)" />
                                            <circle cx="2.66536" cy="73.3333" r="1.66667" transform="rotate(180 2.66536 73.3333)"
                                                fill="var(--primary)" />
                                            <circle cx="2.66536" cy="45" r="1.66667" transform="rotate(180 2.66536 45)" fill="var(--primary)" />
                                            <circle cx="2.66536" cy="16" r="1.66667" transform="rotate(180 2.66536 16)" fill="var(--primary)" />
                                            <circle cx="2.66536" cy="59" r="1.66667" transform="rotate(180 2.66536 59)" fill="var(--primary)" />
                                            <circle cx="2.66536" cy="30.6666" r="1.66667" transform="rotate(180 2.66536 30.6666)"
                                                fill="var(--primary)" />
                                            <circle cx="2.66536" cy="1.66665" r="1.66667" transform="rotate(180 2.66536 1.66665)"
                                                fill="var(--primary)" />
                                        </svg>
                                    </span>
                                    <span class="absolute -bottom-7 -left-7 z-[-1]">
                                        <svg width="107" height="134" viewBox="0 0 107 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="104.999" cy="132" r="1.66667" transform="rotate(180 104.999 132)" fill="var(--primary)" />
                                            <circle cx="104.999" cy="117.333" r="1.66667" transform="rotate(180 104.999 117.333)"
                                                fill="var(--primary)" />
                                            <circle cx="104.999" cy="102.667" r="1.66667" transform="rotate(180 104.999 102.667)"
                                                fill="var(--primary)" />
                                            <circle cx="104.999" cy="88" r="1.66667" transform="rotate(180 104.999 88)" fill="var(--primary)" />
                                            <circle cx="104.999" cy="73.3333" r="1.66667" transform="rotate(180 104.999 73.3333)"
                                                fill="var(--primary)" />
                                            <circle cx="104.999" cy="45" r="1.66667" transform="rotate(180 104.999 45)" fill="var(--primary)" />
                                            <circle cx="104.999" cy="16" r="1.66667" transform="rotate(180 104.999 16)" fill="var(--primary)" />
                                            <circle cx="104.999" cy="59" r="1.66667" transform="rotate(180 104.999 59)" fill="var(--primary)" />
                                            <circle cx="104.999" cy="30.6666" r="1.66667" transform="rotate(180 104.999 30.6666)"
                                                fill="var(--primary)" />
                                            <circle cx="104.999" cy="1.66665" r="1.66667" transform="rotate(180 104.999 1.66665)"
                                                fill="var(--primary)" />
                                            <circle cx="90.3333" cy="132" r="1.66667" transform="rotate(180 90.3333 132)" fill="var(--primary)" />
                                            <circle cx="90.3333" cy="117.333" r="1.66667" transform="rotate(180 90.3333 117.333)"
                                                fill="var(--primary)" />
                                            <circle cx="90.3333" cy="102.667" r="1.66667" transform="rotate(180 90.3333 102.667)"
                                                fill="var(--primary)" />
                                            <circle cx="90.3333" cy="88" r="1.66667" transform="rotate(180 90.3333 88)" fill="var(--primary)" />
                                            <circle cx="90.3333" cy="73.3333" r="1.66667" transform="rotate(180 90.3333 73.3333)"
                                                fill="var(--primary)" />
                                            <circle cx="90.3333" cy="45" r="1.66667" transform="rotate(180 90.3333 45)" fill="var(--primary)" />
                                            <circle cx="90.3333" cy="16" r="1.66667" transform="rotate(180 90.3333 16)" fill="var(--primary)" />
                                            <circle cx="90.3333" cy="59" r="1.66667" transform="rotate(180 90.3333 59)" fill="var(--primary)" />
                                            <circle cx="90.3333" cy="30.6666" r="1.66667" transform="rotate(180 90.3333 30.6666)"
                                                fill="var(--primary)" />
                                            <circle cx="90.3333" cy="1.66665" r="1.66667" transform="rotate(180 90.3333 1.66665)"
                                                fill="var(--primary)" />
                                            <circle cx="75.6654" cy="132" r="1.66667" transform="rotate(180 75.6654 132)" fill="var(--primary)" />
                                            <circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)" fill="var(--primary)" />
                                            <circle cx="75.6654" cy="117.333" r="1.66667" transform="rotate(180 75.6654 117.333)"
                                                fill="var(--primary)" />
                                            <circle cx="31.9993" cy="117.333" r="1.66667" transform="rotate(180 31.9993 117.333)"
                                                fill="var(--primary)" />
                                            <circle cx="75.6654" cy="102.667" r="1.66667" transform="rotate(180 75.6654 102.667)"
                                                fill="var(--primary)" />
                                            <circle cx="31.9993" cy="102.667" r="1.66667" transform="rotate(180 31.9993 102.667)"
                                                fill="var(--primary)" />
                                            <circle cx="75.6654" cy="88" r="1.66667" transform="rotate(180 75.6654 88)" fill="var(--primary)" />
                                            <circle cx="31.9993" cy="88" r="1.66667" transform="rotate(180 31.9993 88)" fill="var(--primary)" />
                                            <circle cx="75.6654" cy="73.3333" r="1.66667" transform="rotate(180 75.6654 73.3333)"
                                                fill="var(--primary)" />
                                            <circle cx="31.9993" cy="73.3333" r="1.66667" transform="rotate(180 31.9993 73.3333)"
                                                fill="var(--primary)" />
                                            <circle cx="75.6654" cy="45" r="1.66667" transform="rotate(180 75.6654 45)" fill="var(--primary)" />
                                            <circle cx="31.9993" cy="45" r="1.66667" transform="rotate(180 31.9993 45)" fill="var(--primary)" />
                                            <circle cx="75.6654" cy="16" r="1.66667" transform="rotate(180 75.6654 16)" fill="var(--primary)" />
                                            <circle cx="31.9993" cy="16" r="1.66667" transform="rotate(180 31.9993 16)" fill="var(--primary)" />
                                            <circle cx="75.6654" cy="59" r="1.66667" transform="rotate(180 75.6654 59)" fill="var(--primary)" />
                                            <circle cx="31.9993" cy="59" r="1.66667" transform="rotate(180 31.9993 59)" fill="var(--primary)" />
                                            <circle cx="75.6654" cy="30.6666" r="1.66667" transform="rotate(180 75.6654 30.6666)"
                                                fill="var(--primary)" />
                                            <circle cx="31.9993" cy="30.6666" r="1.66667" transform="rotate(180 31.9993 30.6666)"
                                                fill="var(--primary)" />
                                            <circle cx="75.6654" cy="1.66665" r="1.66667" transform="rotate(180 75.6654 1.66665)"
                                                fill="var(--primary)" />
                                            <circle cx="31.9993" cy="1.66665" r="1.66667" transform="rotate(180 31.9993 1.66665)"
                                                fill="var(--primary)" />
                                            <circle cx="60.9993" cy="132" r="1.66667" transform="rotate(180 60.9993 132)" fill="var(--primary)" />
                                            <circle cx="17.3333" cy="132" r="1.66667" transform="rotate(180 17.3333 132)" fill="var(--primary)" />
                                            <circle cx="60.9993" cy="117.333" r="1.66667" transform="rotate(180 60.9993 117.333)"
                                                fill="var(--primary)" />
                                            <circle cx="17.3333" cy="117.333" r="1.66667" transform="rotate(180 17.3333 117.333)"
                                                fill="var(--primary)" />
                                            <circle cx="60.9993" cy="102.667" r="1.66667" transform="rotate(180 60.9993 102.667)"
                                                fill="var(--primary)" />
                                            <circle cx="17.3333" cy="102.667" r="1.66667" transform="rotate(180 17.3333 102.667)"
                                                fill="var(--primary)" />
                                            <circle cx="60.9993" cy="88" r="1.66667" transform="rotate(180 60.9993 88)" fill="var(--primary)" />
                                            <circle cx="17.3333" cy="88" r="1.66667" transform="rotate(180 17.3333 88)" fill="var(--primary)" />
                                            <circle cx="60.9993" cy="73.3333" r="1.66667" transform="rotate(180 60.9993 73.3333)"
                                                fill="var(--primary)" />
                                            <circle cx="17.3333" cy="73.3333" r="1.66667" transform="rotate(180 17.3333 73.3333)"
                                                fill="var(--primary)" />
                                            <circle cx="60.9993" cy="45" r="1.66667" transform="rotate(180 60.9993 45)" fill="var(--primary)" />
                                            <circle cx="17.3333" cy="45" r="1.66667" transform="rotate(180 17.3333 45)" fill="var(--primary)" />
                                            <circle cx="60.9993" cy="16" r="1.66667" transform="rotate(180 60.9993 16)" fill="var(--primary)" />
                                            <circle cx="17.3333" cy="16" r="1.66667" transform="rotate(180 17.3333 16)" fill="var(--primary)" />
                                            <circle cx="60.9993" cy="59" r="1.66667" transform="rotate(180 60.9993 59)" fill="var(--primary)" />
                                            <circle cx="17.3333" cy="59" r="1.66667" transform="rotate(180 17.3333 59)" fill="var(--primary)" />
                                            <circle cx="60.9993" cy="30.6666" r="1.66667" transform="rotate(180 60.9993 30.6666)"
                                                fill="var(--primary)" />
                                            <circle cx="17.3333" cy="30.6666" r="1.66667" transform="rotate(180 17.3333 30.6666)"
                                                fill="var(--primary)" />
                                            <circle cx="60.9993" cy="1.66665" r="1.66667" transform="rotate(180 60.9993 1.66665)"
                                                fill="var(--primary)" />
                                            <circle cx="17.3333" cy="1.66665" r="1.66667" transform="rotate(180 17.3333 1.66665)"
                                                fill="var(--primary)" />
                                            <circle cx="46.3333" cy="132" r="1.66667" transform="rotate(180 46.3333 132)" fill="var(--primary)" />
                                            <circle cx="2.66536" cy="132" r="1.66667" transform="rotate(180 2.66536 132)" fill="var(--primary)" />
                                            <circle cx="46.3333" cy="117.333" r="1.66667" transform="rotate(180 46.3333 117.333)"
                                                fill="var(--primary)" />
                                            <circle cx="2.66536" cy="117.333" r="1.66667" transform="rotate(180 2.66536 117.333)"
                                                fill="var(--primary)" />
                                            <circle cx="46.3333" cy="102.667" r="1.66667" transform="rotate(180 46.3333 102.667)"
                                                fill="var(--primary)" />
                                            <circle cx="2.66536" cy="102.667" r="1.66667" transform="rotate(180 2.66536 102.667)"
                                                fill="var(--primary)" />
                                            <circle cx="46.3333" cy="88" r="1.66667" transform="rotate(180 46.3333 88)" fill="var(--primary)" />
                                            <circle cx="2.66536" cy="88" r="1.66667" transform="rotate(180 2.66536 88)" fill="var(--primary)" />
                                            <circle cx="46.3333" cy="73.3333" r="1.66667" transform="rotate(180 46.3333 73.3333)"
                                                fill="var(--primary)" />
                                            <circle cx="2.66536" cy="73.3333" r="1.66667" transform="rotate(180 2.66536 73.3333)"
                                                fill="var(--primary)" />
                                            <circle cx="46.3333" cy="45" r="1.66667" transform="rotate(180 46.3333 45)" fill="var(--primary)" />
                                            <circle cx="2.66536" cy="45" r="1.66667" transform="rotate(180 2.66536 45)" fill="var(--primary)" />
                                            <circle cx="46.3333" cy="16" r="1.66667" transform="rotate(180 46.3333 16)" fill="var(--primary)" />
                                            <circle cx="2.66536" cy="16" r="1.66667" transform="rotate(180 2.66536 16)" fill="var(--primary)" />
                                            <circle cx="46.3333" cy="59" r="1.66667" transform="rotate(180 46.3333 59)" fill="var(--primary)" />
                                            <circle cx="2.66536" cy="59" r="1.66667" transform="rotate(180 2.66536 59)" fill="var(--primary)" />
                                            <circle cx="46.3333" cy="30.6666" r="1.66667" transform="rotate(180 46.3333 30.6666)"
                                                fill="var(--primary)" />
                                            <circle cx="2.66536" cy="30.6666" r="1.66667" transform="rotate(180 2.66536 30.6666)"
                                                fill="var(--primary)" />
                                            <circle cx="46.3333" cy="1.66665" r="1.66667" transform="rotate(180 46.3333 1.66665)"
                                                fill="var(--primary)" />
                                            <circle cx="2.66536" cy="1.66665" r="1.66667" transform="rotate(180 2.66536 1.66665)"
                                                fill="var(--primary)" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;

