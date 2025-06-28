import { useEffect, useRef } from 'react';
import "../../assets/hero.css";
import { Link } from 'react-router-dom';

export default function Hero() {
  const carouselRef = useRef(null);
  const positionRef = useRef(0);
  const speed = 0.5;

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationFrameId;

    function moveCarousel() {
      positionRef.current -= speed;

      // Reset position when a card width is reached (assuming 320px card width)
      if (positionRef.current < -320) {
        positionRef.current = 0;
        // Move first card to end
        if (carousel) {
          carousel.appendChild(carousel.firstElementChild);
        }
      }

      // Apply the transform with a slight curve effect
      if (carousel) {
        carousel.style.transform = `rotate(-5deg) translateX(${positionRef.current}px)`;
      }
      animationFrameId = requestAnimationFrame(moveCarousel);
    }

    // Start carousel animation
    animationFrameId = requestAnimationFrame(moveCarousel);

    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Empty dependency array since speed is constant

  return (
    <section className="relative pt-12 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <span className="bg-[var(--secondary)]/30 text-[var(--primary)] px-6 py-2 rounded-full text-sm font-medium inline-block">
            GSTIN: 06BWBPM7456C1ZM
          </span>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl lg:text-[4rem] leading-tight font-bold mb-8 tracking-tight">
            Simplify Your Taxes<br />with Expert Guidance
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Mandeep Nain & Associates offers expert income tax and GST solutions to ensure compliance and boost your business success. Trust our team in Panchkula, Haryana, to guide you every step of the way.
          </p>
        </div>
      </div>

      <div className="carousel-wrapper mt-16">
        <div className="carousel-container">
          <div className="carousel-track" id="carousel" ref={carouselRef}>
            <div className="carousel-card">
              <img src="/h1.jpg" alt="Tax Consultancy" />
            </div>
            <div className="carousel-card">
              <img src="/h2.jpg" alt="GST Filing" />
            </div>
            <div className="carousel-card">
              <img src="/h3.jpg" alt="Income Tax Planning" />
            </div>
            <div className="carousel-card">
              <img src="/h4.jpg" alt="Business Compliance" />
            </div>
            <div className="carousel-card">
              <img src="/h5.jpg" alt="Financial Advisory" />
            </div>
            <div className="carousel-card">
              <img src="/h6.jpg" alt="Tax Solutions" />
            </div>
          </div>
        </div>
      </div>

      <div className=" text-center mt-12 mb-20">
        <Link to="/contact" className="cursor-pointer text-[var(--primary)] bg-[var(--secondary)]/30 px-8 py-3 rounded-full text-lg font-medium shadow-lg">
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}