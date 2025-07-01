import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';

const Register = () => {
  const navigate = useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState(0)
    const [password, setPassword] = useState(0)
    
  function handleSubmit(){
    axios.post("http://localhost:5000/" ,{
      name,
      email,
      age,
      password
    })
  .then((res)=>{
    console.log("Added:", res.data);
    navigate('./Login')
    
  }).catch((err)=>{
    console.log("Add Error:", err);
    });
  
  }   
    
   const btn=()=>{
        const handleSubmit = ()=>{
          alert("Your registration data has been successfully saved.")
        }
      }
  


  return (
    <div>
      <div className='navbars'>
        <div className="nav">
        <h1>Task Management System</h1>
        </div>
        <div className="naving">
        <a href="" onClick={() => navigate('/')}>Home</a>
        <p onClick={() => navigate('/Dash')}>Task</p>
        <button>Login</button>
        </div>
      </div>
    <div className="page">
      <h1>Register your account</h1>
      <input type="text" placeholder=" enter your Name"  onChange={(e) => setName(e.target.value)}/>
      <br />
      <input type="text" placeholder="enter your Email"  onChange={(e) => setEmail(e.target.value)}/>
      <br />
      <input type="text" placeholder='enter your Age' onChange={(e) => setAge(e.target.value)}/>
      <br/>
      <input type="password" placeholder="enter your Password" onChange={(e) => setPassword(e.target.value)} />
      <br/>
      <input type="file" placeholder='choose file profile image'  />
      <br />
      <div className="item">
      <p className='pp'>have an account?</p>
      <button onClick={() => navigate('/login')} className='btn'>Go to Login</button>
      </div>
     <button className='reg' onClick={handleSubmit}>Register</button>
    </div>
    </div>
  );
};


export default Register;