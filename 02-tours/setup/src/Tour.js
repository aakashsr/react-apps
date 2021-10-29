import React, { useState } from "react";

const Tour = ({image, info, name, price, id, deleteTour }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <div className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <div className="tour-price">{price}</div>
        </div>
        <p>
          {readMore ? info.substring(0, 200) + "..." : info}
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
