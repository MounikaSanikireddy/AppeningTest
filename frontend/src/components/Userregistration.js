import  { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
// import "../components/css/User.css"

function Userregistration() {
  let navigate=useNavigate()
    let [Form,setFormData]=useState({firstname:"",lastname:"",email:"",mobile:"",password:""})
     // Event handler to update form data
    let handleChange = (event) => {
        let { name, value } = event.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
    };
        // Event handler to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        
        alert("User Registerd Success")
        localStorage.setItem('userRegisters',JSON.stringify(Form))
        navigate("/login")
    
    };


   
    
  return (
    <div>
          <form onSubmit={handleSubmit}> 
       
        `<legend style={{marginLeft:"330px"}}><h3>UserRegistertration</h3></legend>
        <div className="formbody" style={{backgroundColor:"aliceblue" ,border:"2px solid blue",padding:"30px",width:"30%",margin:"auto"}}>  
            <label for="firstname" >Firstname:</label>
            <input type="text" placeholder="firstname" name="firstname"style={{marginLeft:"10px"}} value={Form.firstname} onChange={handleChange}/><br/><br/>                                                                                                             
            <label for="lastname">Lastname:</label>
            <input type="text" placeholder="lastname" name="lastname" style={{marginLeft:"10px"}} value={Form.lastname} onChange={handleChange}/><br/><br/>
            <label for="email">Email:</label>
            <input type="email" placeholder="email@gmail.com" name="email" style={{marginLeft:"10px"}} value={Form.email} required onChange={handleChange}/><br/><br/>
              <label for="mobile">Mobile No:</label>
              <input type="tel" placeholder="Mobile number" name="mobile" style={{marginLeft:"10px"}} value={Form.mobile} onChange={handleChange}/><br/><br/>
              <label for="password">Password:</label>
              <input type="password" placeholder="password" name="password"value={Form.password} style={{marginLeft:"10px"}} onChange={handleChange}/><br/><br/>
              <button type="submit"  style={{marginLeft:"90px"}} className='btn btn-primary'>Submit</button><br/>
              <Link to="/login" style={{marginLeft:"190px"}}>Login</Link>
              
        </div>
       </form>
       
      
    </div>
  )
}

export default Userregistration
