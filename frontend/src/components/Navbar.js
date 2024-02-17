import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link to="/login" className='btn btn-primary' style={{marginLeft:"93%",marginTop:"20px"}}>LOGIN</Link>
      <marquee direction="right"><b style={{fontSize:"60px"}}>WELCOME</b></marquee>
     
      
    </div>
  )
}

export default Navbar
