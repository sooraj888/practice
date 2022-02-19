import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import CountryInput from "./pages/CountryInput";

import NotFound from "./pages/NotFound";
import CountryDetails from "./pages/CountryDetails";

function App() {
  return (
    <div className="App">
      <Link to="/" className="headding">
        Country Weather App
      </Link>
      <Routes>
        <Route path="/" element={<CountryInput />} />
        <Route
          path="countryDeatils"
          element={<CountryDetails></CountryDetails>}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
