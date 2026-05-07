
import { Route, BrowserRouter  , Routes, Link } from "react-router-dom";
import Home from "./Component_main/Home"
import About from "./Component_main/About"
import Contact from "./Component_main/Contact"

function App() {
  
  return (
    <>
  
    <BrowserRouter>
     <h1>uday</h1>
        <Link to='/'>Home</Link><br />
         <Link to='/About'>About</Link><br />
         <Link to='/Contact'>contact</Link><br />
   
    <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
