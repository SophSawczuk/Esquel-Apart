import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Comodidades from "./components/Comodidades.jsx";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/amenities" element={<Comodidades/>}/>
      </Routes>
    </>
  )
}

export default App
