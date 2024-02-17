import React, { useState,useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Login() {
  let navigate=useNavigate()
     let [FormData,setFormData]=useState({email:"",password:""})
    // let [values,setValues]=useState("mounika")
    // const inputRef = useRef(null)
    // const [isEditing, setIsEditing] = useState(false)
    // console.log(isEditing)
    let handleChange = (event) => {
        let { name, value } = event.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
      
    }
    // const handleEditClick = () => {

    //   setIsEditing(!isEditing);
    //   console.log(isEditing)
    //   if (!isEditing) {
    //     inputRef.current.focus();
    //   }
    // };
    const formSubmit = (event) => {
        event.preventDefault();
        // Do something with formData
        // console.log(FormData);
        
        let data=JSON.parse(localStorage.getItem("userRegisters"))
        if(FormData.email===data.email && FormData.password===data.password)
        {
          alert("userlogged in")
          navigate("/Home")

        }
        else{
            alert("wrong mail or pasword")
        }
    
    };
  return (
    <div>
        <h3 style={{marginLeft:"500px",marginTop:"80px"}}>Login</h3>
      <form onSubmit={formSubmit} style={{fontWeight:"bold",backgroundColor:"grey",margin:"auto",height:"400px",width:"30%",marginTop:"60px",borderRadius:"3px",border:"2px solid black"}}>
         
        <div style={{paddingLeft:"100px"}}>
          
        <br/><br/>
        <label>Email:</label><br/><br/>
         <input type="email" placeholder='Enter the email' name='email' required value={FormData.email} onChange={handleChange}/><br/><br/>
         
         {/* <input type="email" placeholder='Enter the email' name='email' required value={values} onChange={((e)=>setValues(e.target.value))} onClick={handleEditClick} ref={inputRef} readOnly={!isEditing} /><br/><br/> */}
        
        <label>Password:</label><br/><br/>
        <input type="password" placeholder='Enter the Password' name='password' value={FormData.password} onChange={handleChange}/><br/><br/>
        <button type='submit'style={{marginLeft:"50px"}} className='btn btn-primary'>Submit</button><br/><br/>
        
        <Link to="/signup" style={{marginLeft:"130px",color:"white"}} >Signup</Link>
        </div>
        
      </form>
    </div>
  )
}

export default Login
