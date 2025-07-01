import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import img1 from "../assets/img.png"
import { MdOutlineSlowMotionVideo } from "react-icons/md";



const home = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-wrapper">
      {/* Navbar */}
      <nav className="navbars">
        <div className="logo">Task Management System</div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#" onClick={() => navigate('/Dash')}>Tasks</a>
          <button className="login-btn" onClick={() => navigate('/Login')}>Login</button>
          


        </div>
      </nav>

      {/* Main Content */}
      <div className="landing-container">
        <div className="landing-content">
          {/* Left Section */}
          { <div className="flex-section">
          <div className="text-section">
            <h2 className="main-title">
             <span className='the'>The</span>
             <br /> 
             <span className='task-manager'>Task Manager</span>
              <br />
              <span>Assignment</span>
            </h2>
            <p className="description">
              task manager is a managment system with <br /> dashboard  It was founded in 2025 by <br /> Kashan Adnan.
            </p>
            <button className="browse-button">Browse All Assignments <MdOutlineSlowMotionVideo className='pause'/></button>
          </div>
          <div className="image-section">
            <img
              src={img1}
              alt="ToDo"
              className="todo-image"
            />
            </div>
          </div> }
          <div className="flex-item">

          </div>
        </div>
      </div>
    </div>  
  );
};

export default home;
