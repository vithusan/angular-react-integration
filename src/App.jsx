import { useEffect, useState } from "react";
import "./App.css";
import FetchNewsButton from "./FetchNewsButton"; // Import the new button component

function App() {
  const [showNewsWidget, setShowNewsWidget] = useState(false); // State to control rendering of the news-widget

  useEffect(() => {
    // Dynamically import Angular files
    const loadAngular = async () => {
      try {
        const polyfills = await import("./angular-files/polyfills");
        const main = await import("./angular-files/main");
        console.log("Angular files loaded:", { polyfills, main });
      } catch (error) {
        console.error("Error loading Angular files:", error);
      }
    };

    loadAngular();
  }, []); // Empty dependency array ensures this runs once on mount

  const handleFetchNews = () => {
    setShowNewsWidget(true); // Show the news-widget when the button is clicked
  };

  return (
    <div>
      <h1>React App with Angular Integration</h1>
      {!showNewsWidget && <FetchNewsButton onClick={handleFetchNews} />}{" "}
      {/* Show button if widget is not displayed */}
      {showNewsWidget && <news-widget></news-widget>}{" "}
      {/* Render the news-widget only when showNewsWidget is true */}
    </div>
  );
}

export default App;
