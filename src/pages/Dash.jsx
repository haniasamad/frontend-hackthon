import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useState } from 'react';
import axios from 'axios';
import pic from './ka.png'
import { LuLayoutDashboard } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";





const Dash = () => {
      const navigate = useNavigate();
      const [todo, setTodo]= useState([])
     const [task, setTask] = useState("")
    const [desc, setDesc] = useState("")
  function handleAdd(){
     if(!task.trim() || !desc.trim()){
        //   alert("Both inputs are required")
     }
    axios.post("http://localhost:5000/task" ,{
     task,
     desc,
    //  complete:false
    })
  .then((res)=>{
    //sattodo([...todo, res.data]);
    setTask(""),
    setDesc("")
    console.log("it is saved in mongodnb")

    // console.log("Added:", res.data);
    // navigate('./Profile')
    
  }).catch((err)=>{
    console.log("Add Error:", err);
    });
    // app.get("")
}
//   const tasks = [
//      { id: 1, title: '', description: '' },
//     { id: 2, title: 'Home work karna he', description: 'maths ka assignment or algebra karna he' },
//     { id: 3, title: 'Home work karna he', description: 'maths ka assignment or algebra karna he' },
//     { id: 4, title: 'Home work karna he', description: 'maths ka assignment or algebra karna he' },
//  ];()
let [data,setdata] = useState([])
function getdata(){
    axios.get
    ("http://localhost:5000/todo")
    .then((res)=>{
        console.log(res.data);
        setdata(res.data)
    }).catch((err)=>{
        console.log("error a rha ha");
        
    })
}
useEffect(()=>{
    getdata();
},[])

const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/todo/${id}`);
    setTodo(todo.filter(todo => todo._id!==id))
};
getdata()
const handleUpdate = async (id) => {
    const updatedTask = prompt("New Title:");
    const updatedDesc = prompt("New Description:");
    if (updatedTask && updatedDesc) {
      await axios.put(`http://localhost:5000/todo/${id}`, {
        task: updatedTask,
        desc: updatedDesc,
      });
    getdata()
}
};

  return (
    <div className="app-container">
      <div className="sidebar">
        <h3>Task Management System</h3>
        <ul>
          <li className='dash'><LuLayoutDashboard />Dashboard</li>
          <li className='task'><IoMdCheckmarkCircleOutline />Tasks</li>
          <li className="acti" onClick={() => navigate('/profile')}> <FaRegUserCircle />My Profile</li>
        </ul>
        <button className="logout"><MdLogout />Logout</button>
        <i className="fa-solid fa-plus"></i>
      </div>
      <div className="flexing">
      <div className="nav">
        <div className="line"></div>
        <li className='ho' onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/profile')} className='ta'>Task</li>
        <img src={pic} alt="" /><h6 className='hh'>Kashan adnan</h6><span className='span'>user account</span>
      </div>
      </div>
        <div className="content">
      <div className="main-content">
        <h2>Uncompleted Todos<span className="required">*</span></h2>
        <table className="task-table">
          <thead>
            <tr>
              <th>S.no</th>
              <th className='th'>Title</th>
              <th>Description</th>
              <th>Actions</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {data.map((task, i) => (
              <tr key={task._id}>
                <td>{i + 1}</td>
                <td>{task.task}</td>
                <td>{task.desc || "No description"}</td>
                <td><button onClick={()=> handleDelete(task._id)} className='upda'><FaTrashAlt /></button></td>
                <td><button onClick={()=> handleUpdate(task._id)} className='del'><FaPencil /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
        <div className="task-bottom">
          <div className="new-task">
            <h3>New Task<span className="required">*</span></h3>
            <input type="text" placeholder="enter your task" onChange={(e) => setTask(e.target.value)} />
            <input type="text" placeholder="enter your description" onChange={(e) => setDesc(e.target.value)} />
            <button onClick={handleAdd}>Add Task</button>
          </div>

          <div className="progress-circle">
            <div className="circle">
              <p>80%</p>
              <span>Todos Complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
