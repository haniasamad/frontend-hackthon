import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MdLogout } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdTaskAlt } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import axios from 'axios';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: '',
    image: ''
  });
  const [updateImage, setUpdateImage] = useState('');
  const userId = '6861159e8f6f94d779458ffc';

  useEffect(() => {
    axios.get("https://vercel.com/hania-samads-projects/bakend-hackathon-phtb/2aoeVzXrsR43J55wduMz57ej9uXr")
      .then((res) => {
        setUser(res.data);
        setUpdateImage(res.data.image);
      })
      .catch((err) => {
        console.log('Error fetching:', err);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'image') {
      setUpdateImage(value);
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleSubmmit = (e) => {
    e.preventDefault();
    const updateUser = { ...user, image: updateImage };
    axios.put("https://vercel.com/hania-samads-projects/bakend-hackathon-phtb/2aoeVzXrsR43J55wduMz57ej9uXr", updateUser)
      .then((res) => {
        alert("Profile Updated Successfully");
      })
      .catch((err) => {
        console.log('Update failed:', err);
      });
  };

  return (
    <div className="profile-wrapper">
      <aside className="sidebar">
        <h3 className="title">Task Mangment System</h3>
        <ul className="menu">
          <li className="disabled" onClick={() => navigate('/dash')}><LuLayoutDashboard />Dashboard</li>
          <li className="disabled" onClick={() => navigate('/dash')}> <MdTaskAlt />Tasks</li>
          <li className="active"> <FaRegUserCircle />My Profile</li>
        </ul>
        <button className="log"><MdLogout /> Logout</button>
      </aside>

      <main className="main">
        <nav className="topbar">
          <div className="nav-links">
            <span className="nav" onClick={() => navigate('/')}>Home</span>
            <span className="nav active">Tasks</span>
          </div>
          <div className="user">
            <img
              src={updateImage || "https://www.thewarehouse.pk/cdn/shop/products/60239f50e2c18.jpg?v=1658296185"}
              alt="User"
              className="avatar"
            />
            <div className="user-info">
              <p className="name">{user.name || 'User Name'}</p>
              <p className="role">User Account</p>
            </div>
          </div>
        </nav>

        <section className="profile-section">
          <div className="photo-section">
            <img
              src={updateImage || "https://www.thewarehouse.pk/cdn/shop/products/60239f50e2c18.jpg?v=1658296185"}
              alt="Profile"
              className='photo'
            />
            <p>Change your photo</p>
          </div>

          <form className="form-section" onSubmit={handleSubmmit}>
            <h2>Edit Your Profile <span className="required">*</span></h2>
            <input type="text" name='name' value={user.name} placeholder='Enter your name' onChange={handleChange} />
            <input type="email" name='email' value={user.email} placeholder='Enter your email' onChange={handleChange} />
            <input type="number" name='age' value={user.age} placeholder='Enter your age' onChange={handleChange} />
            <input type="text" name='image' value={updateImage} placeholder='Enter your URL here' onChange={handleChange} className='inp' />
            <button type="submit" className="edit-btn">Edit</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Profile;
