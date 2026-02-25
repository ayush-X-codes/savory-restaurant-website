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

      <h2 className="about-heading">Rooted in Tradition,<br />Made with Love</h2>

      <div className="about-divider" />

      <div className="about-stats">
        <div className="stat-pill">
          <span className="stat-number">15+</span>
          <span className="stat-label">Years Open</span>
        </div>
        <div className="stat-pill">
          <span className="stat-number">100%</span>
          <span className="stat-label">Local Ingredients</span>
        </div>
        <div className="stat-pill">
          <span className="stat-number">3rd</span>
          <span className="stat-label">Generation Recipes</span>
        </div>
      </div>

      <div className="about-body">
        <p className="para-about">
          Since 2010, we've been serving <strong>authentic homemade pasta</strong> crafted
          from family recipes passed down through generations. Our passion is bringing
          the warmth and honest flavors of Italy to your table.
        </p>
        <p className="para-about">
          Every dish is made with fresh, locally-sourced ingredients — from our
          wood-fired pizzas to our handmade ravioli. Each bite carries a story
          of tradition and an unwavering dedication to quality.
        </p>
      </div>

      <p className="about-signature">— The Savory Family</p>
    </section>
  );
};

export default About;