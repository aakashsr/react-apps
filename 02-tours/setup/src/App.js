import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tourData, setTourData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const toursData = await response.json();
    setTourData(toursData);
    setLoading(false);
  };

  const deleteTour = (id) => {
    const newTours = tourData.filter((tour) => tour.id !== id);
    setTourData(newTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      <main>
        <div className="title">
          {tourData.length === 0 ? <h2>No tours left</h2> : <h2>Our Tours</h2>}
          {tourData.length === 0 && (
            <button class="btn" onClick={() => fetchTours()}>
              Refresh
            </button>
          )}
          {tourData.length > 0 && <div className="underline"></div>}
        </div>
        <Tours tourData={tourData} deleteTour={deleteTour} />
      </main>
    </>
  );
}

export default App;
