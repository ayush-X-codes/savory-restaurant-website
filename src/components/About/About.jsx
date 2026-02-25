import React, { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const sectionRef = useRef(null);

  // Scroll-triggered reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <p className="about-label">Our Story</p>

<h2 className="about-heading">
  A Modern Café Experience,<br />Crafted for Haldwani
</h2>

<div className="about-divider" />

<div className="about-stats">
  <div className="stat-pill">
    <span className="stat-number">4.0★</span>
    <span className="stat-label">Customer Rating</span>
  </div>
  <div className="stat-pill">
    <span className="stat-number">1,000+</span>
    <span className="stat-label">Happy Reviews</span>
  </div>
  <div className="stat-pill">
    <span className="stat-number">3 Ways</span>
    <span className="stat-label">Dine • Drive • Deliver</span>
  </div>
</div>

<div className="about-body">
  <p className="para-about">
    Located on Rampur Road in Haldwani, <strong>The Klay</strong> has become a 
    favorite neighborhood café where comfort meets convenience. Whether you're 
    dining in with friends, grabbing a quick drive-through bite, or ordering 
    from home, we make every experience smooth and satisfying.
  </p>
  <p className="para-about">
    With over a thousand customer reviews and a reputation for consistency, 
    The Klay is known for its welcoming atmosphere and inclusive environment. 
    It’s a place where conversations flow, cravings are satisfied, and every 
    visit feels relaxed and easy.
  </p>
</div>

<p className="about-signature">— Team The Klay</p>
    </section>
  );
};

export default About;