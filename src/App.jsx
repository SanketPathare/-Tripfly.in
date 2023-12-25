
import "./components/Navbar.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react"



export default function App() {
  return (
   <>
   <Navbar/>
     <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
       <Route path="/home" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/service" element={  <Service/>}/>
       <Route path="/contact" element={  <Contact/>}/>
      </Routes>
  
       <Footer/>
       <SpeedInsights/>
       </div>
     
     </>
  
   

  
    
  );
}

