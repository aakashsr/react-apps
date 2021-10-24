import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const changeReview = () => {
    setIndex((prevIndex) => {
      if (prevIndex === people.length - 1) {
        return 1;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const surpriseMe = () => {
    const random = Math.floor(Math.random() * (people.length - 1)) + 1;
    setIndex(random);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img class="person-img" src={image} />
        <span class="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4>{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={() => changeReview()} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={() => changeReview()} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={() => surpriseMe()} className="random-btn">
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
