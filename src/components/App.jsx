import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("App component mounted");
    setIsLoaded(true); // This could be tied to data loading logic later
  }, []);

  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
