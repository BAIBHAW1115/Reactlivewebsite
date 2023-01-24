import React from 'react';
import Home from './Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import About from './About';
import Navbar from './Navbar';
import{Routes,Route} from 'react-router-dom';


const App=()=>{
    return(
        <>  
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/> 
        
        
            
        </Routes>
        <Footer/>
        </>
    )
}
export default App;