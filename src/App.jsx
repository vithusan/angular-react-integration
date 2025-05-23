import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { initializeAngular } from './utils/angularLoader';
import InputBoxAngular from "./pages/InputBoxAngular";
import NewsPage from "./pages/NewsPage";
import HomePage from "./pages/HomePage";

function App() {
  useEffect(() => {
    initializeAngular();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/input" element={<InputBoxAngular />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
