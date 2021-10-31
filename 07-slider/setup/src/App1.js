import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App1() {
  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(0);

  const checkIndex = (index) => {
    if (index < 0) {
      return reviews.length - 1;
    } else if (index >= reviews.length) {
      return 0;
    } else {
      return index;
    }
  };

  const prevReview = () => {
    setIndex((prevIndex) => {
      return checkIndex(prevIndex - 1);
    });
  };

  const nextReview = () => {
    setIndex((prevIndex) => {
      return checkIndex(prevIndex + 1);
    });
  };

  useEffect(() => {
    const event = setTimeout(() => {
      nextReview();
    }, 3000);
    return () => {
      window.clearTimeout(event);
    };
  }, [index]);

  const allReviews = reviews.map((review, i) => {
    const { image, name, title, quote } = review;
    const prevIndex = checkIndex(index-1);
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
          Reviews
          <span>/</span>
        </h2>
      </div>
      <div className="section-center">
        {allReviews}
        <button onClick={() => prevReview()} className="prev">
          <FiChevronLeft />
        </button>
        <button onClick={() => nextReview()} className="next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App1;
