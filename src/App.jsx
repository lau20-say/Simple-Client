import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
