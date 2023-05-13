import React from "react";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Courses } from "./pages/Courses";
import { News } from "./pages/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contacto" element={<Contact />} />
          <Route exact path="/cursos" element={<Courses />} />
          <Route exact path="/novedades" element={<News />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;




