import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const UserProfilePage = React.lazy(
  () => import("../src/modules/UserProfilePage")
);

const HomePage = React.lazy(() => import("../src/modules/HomePage"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:userid" element={<UserProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
