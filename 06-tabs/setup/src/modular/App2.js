import React, { useState, useEffect } from "react";
import Companies from "./Companies";
import JobInfo from "./JobInfo";

const url = "https://course-api.com/react-tabs-project";
function App2() {
  const [jobsInfo, setJobsInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const getJobInfo = async () => {
    const res = await fetch(url);
    const jobInfo = await res.json();
    setJobsInfo(jobInfo);
    setIsLoading(false);
  };

  useEffect(() => {
    getJobInfo();
  }, []);

  if (isLoading) {
    return (
      <section className='section loadin'>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section>
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <Companies jobsInfo={jobsInfo} setIndex={setIndex} index={index} />
        <JobInfo jobsInfo={jobsInfo} index={index} />
      </div>
      <button className="btn">More Info</button>
    </section>
  );
}

export default App2;
