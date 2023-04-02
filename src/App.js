
// import './App.css';

//import { Button } from "bootstrap";
// import Button from "./Components/Button";
// import { Nav } from "react-bootstrap";
// import Navbar from "./Components/Navbar";
import { Gallery } from "./Pages/Gallery";
import  Home  from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Content from "./Pages/Content";
// import Album from "./Components/Album";

function App() {
  return <>
    
     <div className="container py-3">
    <BrowserRouter>
    <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/" element={<Gallery/>}/>
    </Routes>
    </BrowserRouter>
     </div>
   
     </>
  
}

export default App;
