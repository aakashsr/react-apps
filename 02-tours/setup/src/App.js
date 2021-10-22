import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tourData, setTourData] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteTour = (id) => {
    const newTours = tourData.filter((tour) => tour.id !== id)
    setTourData(newTours);
  };

  const fetchTours = async () => {
    const response = await fetch(url);
    const toursData = await response.json();
    setTourData(toursData);
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
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
          <div className="underline"></div>
        </div>
        <Tours
          setTourData={setTourData}
          tourData={tourData}
          deleteTour={deleteTour}
        />
      </main>
    </>
  );
}

export default App;
