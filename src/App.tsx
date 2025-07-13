import "./App.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Create from "./pages/Create";
import Browse from "./pages/Browse";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;