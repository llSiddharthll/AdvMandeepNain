import "../../assets/testimonials.css";
import { useState, useEffect, useRef } from "react";

export default function Testimonials() {
    const testimonials = [
        {
            quote: "Mandeep Nain & Associates simplified my tax filings with expert guidance and timely support. Highly recommended!",
            name: "Priya Gupta",
            designation: "Small Business Owner",
            src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote: "Their GST compliance services were seamless and saved me from penalties. Exceptional team!",
            name: "Amit Sharma",
            designation: "Freelancer",
            src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
        },
        {
            quote: "The personalized tax consultancy from Mandeep Nain & Associates exceeded my expectations. A true professional service!",
            name: "Sonali Bansal",
            designation: "Business Consultant",
            src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const imageContainerRef = useRef(null);
    const autoplayIntervalRef = useRef(null);

    const updateTestimonial = (direction) => {
        setActiveIndex((prev) => (prev + direction + testimonials.length) % testimonials.length);
    };

    const animateWords = (quoteElement) => {
        const words = quoteElement.querySelectorAll('.word');
        words.forEach((word, index) => {
            word.style.transition = 'none';
            word.style.opacity = '0';
            word.style.transform = 'translateY(10px)';
            word.style.filter = 'blur(10px)';
            requestAnimationFrame(() => {
                word.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out, filter 0.2s ease-in-out';
                word.style.opacity = '1';
                word.style.transform = 'translateY(0)';
                word.style.filter = 'blur(0)';
            });
        });
    };

    useEffect(() => {
        const currentTestimonial = testimonials[activeIndex];
        const quoteElement = imageContainerRef.current.querySelector('#quote');
        if (quoteElement) {
            quoteElement.innerHTML = currentTestimonial.quote
                .split(' ')
                .map((word) => `<span class="word">${word}</span>`)
                .join(' ');
            animateWords(quoteElement);
        }

        const images = imageContainerRef.current.querySelectorAll('.testimonial-image');
        images.forEach((img, index) => {
            const offset = index - activeIndex;
            const absOffset = Math.abs(offset);
            const zIndex = testimonials.length - absOffset;
            const opacity = index === activeIndex ? 1 : 0.7;
            const scale = 1 - (absOffset * 0.15);
            const translateY = offset === -1 ? '-20%' : offset === 1 ? '20%' : '0%';
            const rotateY = offset === -1 ? '15deg' : offset === 1 ? '-15deg' : '0deg';

            img.style.zIndex = zIndex;
            img.style.opacity = opacity;
            img.style.transform = `translateY(${translateY}) scale(${scale}) rotateY(${rotateY})`;
        });

        // Autoplay setup
        autoplayIntervalRef.current = setInterval(() => updateTestimonial(1), 5000);

        // Cleanup
        return () => {
            if (autoplayIntervalRef.current) {
                clearInterval(autoplayIntervalRef.current);
            }
        };
    }, [activeIndex, testimonials]);

    return (
        <section className="testimonial ">
            <div className="testimonial-container">
                <div className="testimonial-grid" ref={imageContainerRef}>
                    <div className="image-container">
                        {testimonials.map((testimonial, index) => (
                            <img
                                key={index}
                                src={testimonial.src}
                                alt={testimonial.name}
                                className="testimonial-image"
                                data-index={index}
                            />
                        ))}
                    </div>
                    <div className="testimonial-content">
                        <div>
                            <h3 className="name" id="name">{testimonials[activeIndex].name}</h3>
                            <p className="designation" id="designation">{testimonials[activeIndex].designation}</p>
                            <p className="quote" id="quote"></p>
                        </div>
                        <div className="arrow-buttons">
                            <button
                                className="arrow-button prev-button"
                                id="prev-button"
                                onClick={() => updateTestimonial(-1)}
                                aria-label="Previous testimonial"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                </svg>
                            </button>
                            <button
                                className="arrow-button next-button"
                                id="next-button"
                                onClick={() => updateTestimonial(1)}
                                aria-label="Next testimonial"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}