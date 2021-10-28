import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const getJobData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setJobData(data);
    setLoading(false);
  };

  useEffect(() => {
    getJobData();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  const { title, company, dates, duties } = jobData[index];

  const JobInfo = () => {
    return (
      <div className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-data">{dates}</p>
        {duties.map((duty, i) => (
          <div key={i} className="job-desc">
            <FaAngleDoubleRight style={{color: "var(--clr-primary-5)"}} />
            <p>{duty}</p>
          </div>
        ))}
      </div>
    );
  };

  const buttons = jobData.map((job, i) => (
    <button key={i} onClick={() => setIndex(i)} className={`job-btn ${index === i && 'active-btn'}`}>
      {job.company}
    </button>
  ));

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">{buttons}</div>
        <article className="job-info">{<JobInfo />}</article>
      </div>
      <button className="btn">More info</button>
    </section>
  );
}

export default App;
