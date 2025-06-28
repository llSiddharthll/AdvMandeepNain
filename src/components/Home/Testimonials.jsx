import "../../assets/testimonials.css";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndexRef = useRef(0);

    const imageContainerRef = useRef(null);
    const nameRef = useRef(null);
    const designationRef = useRef(null);
    const quoteRef = useRef(null);

    const testimonials = [
        {
            quote: "Mandeep Nain & Associates simplified my tax filings with expert guidance and timely support. Highly recommended!",
            name: "Priya Gupta",
            designation: "Small Business Owner",
            src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop",
        },
        {
            quote: "Their GST compliance services were seamless and saved me from penalties. Exceptional team!",
            name: "Amit Sharma",
            designation: "Freelancer",
            src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop",
        },
        {
            quote: "The personalized tax consultancy from Mandeep Nain & Associates exceeded my expectations. A true professional service!",
            name: "Sonali Bansal",
            designation: "Business Consultant",
            src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop",
        },
    ];

    const calculateGap = (width) => {
        const minWidth = 1024;
        const maxWidth = 1456;
        const minGap = 60;
        const maxGap = 86;

        if (width <= minWidth) return minGap;
        if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
        return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
    };

    const updateTestimonial = (directionOrIndex) => {
        let newIndex;

        if (directionOrIndex === 1 || directionOrIndex === -1) {
            newIndex = (activeIndexRef.current + directionOrIndex + testimonials.length) % testimonials.length;
        } else {
            newIndex = directionOrIndex;
        }

        const containerWidth = imageContainerRef.current.offsetWidth;
        const gap = calculateGap(containerWidth);
        const maxStickUp = gap * 0.8;

        const images = imageContainerRef.current.querySelectorAll(".testimonial-image");

        images.forEach((img, index) => {
            const offset = (index - newIndex + testimonials.length) % testimonials.length;
            const zIndex = testimonials.length - Math.abs(offset);
            const scale = index === newIndex ? 1 : 0.85;

            let translateX, translateY, rotateY;
            if (offset === 0) {
                translateX = "0%";
                translateY = "0%";
                rotateY = 0;
            } else if (offset === 1 || offset === -2) {
                translateX = "20%";
                translateY = `-${(maxStickUp / img.offsetHeight) * 100}%`;
                rotateY = -15;
            } else {
                translateX = "-20%";
                translateY = `-${(maxStickUp / img.offsetHeight) * 100}%`;
                rotateY = 15;
            }

            gsap.to(img, {
                zIndex,
                scale,
                x: translateX,
                y: translateY,
                rotateY,
                duration: 0.8,
                ease: "power3.out",
            });
        });

        // Animate text
        gsap.to([nameRef.current, designationRef.current], {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                nameRef.current.textContent = testimonials[newIndex].name;
                designationRef.current.textContent = testimonials[newIndex].designation;
                gsap.to([nameRef.current, designationRef.current], {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out",
                });
            },
        });

        gsap.to(quoteRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                quoteRef.current.innerHTML = testimonials[newIndex].quote
                    .split(" ")
                    .map((word) => `<span class="word">${word}</span>`)
                    .join(" ");
                gsap.to(quoteRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out",
                });
                gsap.from(".word", {
                    opacity: 0,
                    y: 10,
                    stagger: 0.02,
                    duration: 0.2,
                    ease: "power2.out",
                });
            },
        });

        setActiveIndex(newIndex);
        activeIndexRef.current = newIndex;
    };

    useEffect(() => {
        updateTestimonial(0);
        quoteRef.current.innerHTML = testimonials[0].quote
            .split(" ")
            .map(word => `<span class="word">${word}</span>`)
            .join(" ");


        const autoplayInterval = setInterval(() => {
            const nextIndex = (activeIndexRef.current + 1) % testimonials.length;
            updateTestimonial(nextIndex);
        }, 5000);

        const handleResize = () => updateTestimonial(activeIndexRef.current);
        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(autoplayInterval);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="testimonial">
            <div className="testimonial-container">

                <div className="testimonial-grid">
                    <div className="image-container" ref={imageContainerRef}>
                        {testimonials.map((testimonial, index) => (
                            <img
                                key={index}
                                src={testimonial.src}
                                alt={`Testimonial from ${testimonial.name}`}
                                className="testimonial-image"
                                data-index={index}
                            />
                        ))}
                    </div>
                    <div className="testimonial-content">
                        <div>
                            <h3 className="name" ref={nameRef}>
                                {testimonials[0].name}
                            </h3>
                            <p className="designation" ref={designationRef}>
                                {testimonials[0].designation}
                            </p>
                            <p className="quote" ref={quoteRef}></p>
                        </div>
                        <div className="arrow-buttons">
                            <button
                                className="arrow-button prev-button"
                                onClick={() => updateTestimonial(-1)}
                                aria-label="Previous testimonial"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                </svg>
                            </button>
                            <button
                                className="arrow-button next-button"
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
