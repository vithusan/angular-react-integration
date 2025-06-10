import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { initializeAngular } from './utils/angularLoader';
import InputBoxAngular from "./pages/InputBoxAngular";
import NewsPage from "./pages/NewsPage";
import HomePage from "./pages/HomePage";
import WebComponent from './pages/WebComponent';
import NewsDisplay from './components/NewsDisplay';
import StaticWebCom from './pages/StaticWebCom';
import NgrxWebCom from './pages/NgrxWebCom';

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
        <Route path="/webcomponent" element={<WebComponent />}/>
        <Route path="/news-display" element={<NewsDisplay />} />
        <Route path="/static-webcom" element={<StaticWebCom/>}/>
        <Route path="/ngrx-webcom" element={<NgrxWebCom />} />
      </Routes>
    </Router>
  );
}

export default App;
