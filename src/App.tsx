import "./App.css";

import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Create from "./pages/Create";
import Browse from "./pages/Browse";
import About from "./pages/About";
import Build from "./pages/Build";

function App() {

  useEffect(() => {
    document.title = "Chimer";
  }, []);

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/about" element={<About />} />
          <Route path="/builds/:id" element={<Build />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;