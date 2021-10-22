import React, { useState } from "react";

const Tour = ({ tour, id,  deleteTour }) => {
  const [text, setText] = useState("Read More");

  const toggleText = () => {
    text === "Read More" ? setText("Show Less") : setText("Read More");
  };
  return (
    <div className="single-tour">
      <img src={tour.image} alt={tour.name} />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <div className="tour-price">{tour.price}</div>
        </div>
        <p>
          {text === "Read More"
            ? tour.info.substring(0, 200) + "..."
            : tour.info}
          <button onClick={() => toggleText()}>{text}</button>
        </p>
        <button onClick={() => deleteTour(id)} className="delete-btn">
          Not Interested
        </button>
      </footer>
    </div>
  );
};

export default Tour;
