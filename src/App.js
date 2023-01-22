import "./App.css";
import "./mediaquery.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Ships from "./components/ships";
import Rockets from "./components/home";
import Launches from "./components/launches";

function App() {
  return (<>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ships.js" element={<Ships />} />
        <Route path="/home.js" element={<Rockets />} />
        <Route path="/launches.js" element={<Launches />} />
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;