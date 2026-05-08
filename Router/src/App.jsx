
import { Route, BrowserRouter  , Routes, Link ,useParams } from "react-router-dom";
import Home from "./Component_main/Home"
import About from "./Component_main/About"
import Contact from "./Component_main/Contact"

function App() {


  function User(){
    const{id}=useParams();
    return <h2>user profile for id : {id}</h2>
  }
  
  return (
    <>
  
    <BrowserRouter>
     <h1>uday</h1>
        <Link style={{backgroundColor:"green", color:'white'}} to='/'>Home</Link><br />
         <Link style={{backgroundColor:"green", color:'white'}} to='/About'>About</Link><br />
         <Link style={{backgroundColor:"green", color:'white' }} to='/User/10'>User</Link><br />
     <Link style={{backgroundColor:"green", color:'white'}} to='/Contact'>Contact</Link><br />
    <Routes>

    <Route  path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
       <Route path="/User/:id" element={<User/>}/>
    <Route path="/Contact" element={<Contact/>}/>
 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
