import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const changeReview = (type) => {
    setIndex((prevIndex) => {
      if (type === "prev") {
        if (index == 0) {
          return people.length - 1;
        } else {
          return index - 1;
        }
      } else {
        if (index === people.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
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
        <button onClick={() => changeReview("prev")} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={() => changeReview("next")} className="next-btn">
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
