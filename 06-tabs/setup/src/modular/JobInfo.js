import React from "react";

import { FaAngleDoubleRight } from "react-icons/fa";

function JobInfo({ jobsInfo, index }) {
  const { company, dates, duties, id, title } = jobsInfo[index];

  const allDuties = duties.map((duty) => (
    <div id={id} className="job-desc">
      <FaAngleDoubleRight />
      <p>{duty}</p>
    </div>
  ));
  return (
    <>
      <div className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {allDuties}
      </div>
    </>
  );
}

export default JobInfo;
