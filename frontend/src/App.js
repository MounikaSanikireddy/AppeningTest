// import {Routes,Route} from 'react-router-dom'
import Userregistration from "./components/Userregistration";
import Login from './components/Login';
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import Home from "./components/Home";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/"  element={<Navbar/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Userregistration/>}/>
     </Routes>
     </BrowserRouter> 
      
      
   
     

    </div>
  )
}

export default App;
