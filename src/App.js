import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Redirect from "./pages/Redirect";
import StatisticDetails from "./pages/StatisticDetails";
import Statistics from "./pages/Statistics";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:short" element={<Redirect />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:short" element={<StatisticDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
