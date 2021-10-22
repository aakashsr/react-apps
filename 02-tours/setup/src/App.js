import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tourData, setTourData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setTourData(result));
  }, []);


  return (
    <>
      <main>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"></div>
        </div>
        {tourData.length > 0 ? <Tours setTourData={setTourData} tourData={tourData}/> : <Loading />}
      </main>
    </>
  );
}

export default App;
