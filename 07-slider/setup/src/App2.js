import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App2() {
  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(0);

  const toggleSlide = (type) => {
    const lastIndex = reviews.length - 1;
    if (type === "prev") {
      setIndex(index === 0 ? lastIndex : index - 1);
    } else {
      setIndex(index === lastIndex ? 0 : index + 1);
    }
  };

  useEffect(() => {
    const event = setTimeout(() => {
      toggleSlide("next");
    }, 3000);
    return () => window.clearTimeout(event);
  }, [index]);

  const allReviews = reviews.map((review, i) => {
    const { image, name, title, quote } = review;
    const prevIndex = index === 0 ? reviews.length - 1 : index-1;

    return (
      <article
        className={
          i === index
            ? "activeSlide"
            : i === prevIndex
            ? "lastSlide"
            : "nextSlide"
        }
      >
        <img src={image} alt={name} className="person-img" />
        <h4>{name}</h4>
        <p className="title">{title}</p>
        <p className="text">{quote}</p>
        <FaQuoteRight class="icon" />
      </article>
    );
  });

  return (
    <section class="section">
      <div className="title">
        <h2>
          Reviewss
          <span>/</span>
        </h2>
      </div>
      <div className="section-center">
        {allReviews}
        <button onClick={() => toggleSlide("prev")} className="prev">
          <FiChevronLeft />
        </button>
        <button onClick={() => toggleSlide("next")} className="next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App2;
