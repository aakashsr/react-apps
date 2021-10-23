import React, { useState } from "react";

const Tour = ({ tour, id, deleteTour }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <div className="single-tour">
      <img src={tour.image} alt={tour.name} />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <div className="tour-price">{tour.price}</div>
        </div>
        <p>
          {readMore ? tour.info.substring(0, 200) + "..." : tour.info}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Read More" : "Show Less"}
          </button>
        </p>
        <button onClick={() => deleteTour(id)} className="delete-btn">
          Not Interested
        </button>
      </footer>
    </div>
  );
};

export default Tour;
