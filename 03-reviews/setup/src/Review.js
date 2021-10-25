import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkIndex = (index) => {
    if (index < 0) {
      return people.length - 1;
    }
    if (index > people.length - 1) {
      return 0;
    }
    return index;
  };

  const changeReview = (type) => {
    if (type === "prev") {
      setIndex((prevIndex) => {
        return checkIndex(prevIndex - 1);
      });
    } else {
      setIndex((prevIndex) => {
        return checkIndex(prevIndex + 1);
      });
    }
  };

  const surpriseMe = () => {
    let random = Math.floor(Math.random() * people.length);
    if (random === index) {
      random = random + 1;
    }
    setIndex(checkIndex(random));
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
