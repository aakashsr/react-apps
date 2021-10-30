import React from "react";

function Companies({ jobsInfo, setIndex, index }) {
  const companyNames = jobsInfo.map((job, i) => {
    return (
      <button
        onClick={() => setIndex(i)}
        className={i === index ? "active-btn job-btn" : "job-btn"}
      >
        {job.company}
      </button>
    );
  });
  return <div className="btn-container">{companyNames}</div>;
}

export default Companies;
