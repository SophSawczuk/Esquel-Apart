import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Comodidades from "./components/Comodidades.jsx";
import Rooms from "./components/Rooms.jsx";
import Contact from "./components/Contact.jsx";
import Location from "./components/Location.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/amenities" element={<Comodidades/>}/>
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/location" element={<Location/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
