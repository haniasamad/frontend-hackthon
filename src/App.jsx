import React from "react";
import { BrowserRouter, Routes, Route, useNavigate , Link} from 'react-router-dom';
import Home from "./pages/home.jsx";
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dash from "./pages/Dash.jsx";
import Profile from "./pages/profile.jsx";
// import pic from './pages/ka.png'
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;