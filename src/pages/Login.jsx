import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
const Login = () => {

  const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState(0)
    
  function handleSubmit(){
    axios.post("https://vercel.com/hania-samads-projects/bakend-hackathon-phtb/2aoeVzXrsR43J55wduMz57ej9uXr",{
      email,
      password
    })
  .then((res)=>{
    console.log("Added:", res.data);
    navigate('./Login')
    
  }).catch((err)=>{
    console.log("Add Error:", err);
    });
  }

  return (
    <div>
      <div className='navbars'>
        <div className="nav">
        <h1>Task Management System</h1>
        </div>
        <div className="naving">
        <a href="" onClick={() => navigate('/')}>Home</a>
        <p onClick={() => navigate('/dash')}>Task</p>
        <button>Login</button>
        </div>
        </div>
    <div className="pages">
      <h1>Login to your account</h1>
      <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <div className="item">
      <p className='pp'>Don't have an account?</p>
      <a onClick={() => navigate('/Register')} className='bttn'>Go to Register</a>
      </div>
      <button onClick={handleSubmit}className='bt'>Login</button>
    </div>
    </div>
  );
}
export default Login