import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Comodidades from "./components/Comodidades.jsx";
import Rooms from "./components/Rooms.jsx";
import Contact from "./components/Contact.jsx";
import Location from "./components/Location.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./assets/ScrollToTop.jsx";
import WhatsAppIcon from "./assets/WhatsAppIcon.jsx";
import Casa from "./components/Casa.jsx";
import Loft from "./components/Loft.jsx";
import Duplex from "./components/Duplex.jsx";


function App() {
  return (
    <>
      <NavBar/>
      <ScrollToTop/>
      <WhatsAppIcon/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/actividades" element={<Comodidades/>}/>
        <Route path="/hospedaje" element={<Rooms/>}/>
        <Route path="/contacto" element={<Contact/>}/>
        <Route path="/ubicacion" element={<Location/>}/>
        <Route path="/casa" element={<Casa/>}/>
        <Route path="/duplex" element={<Duplex/>}/>
        <Route path="/loft" element={<Loft/>}/>
       {/*  <Route exact path= "/Esquel-Apart" element={<Home/>} /> */}
      </Routes>
      <Footer/>
    </>
  )
}

export default App
