import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Sidebar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/all-courses">All Courses</Link></li>
        <li><Link to="/syllabus">Syllabus</Link></li>
        <li><Link to="/student">Student</Link></li>
        <li><Link to="/examination">Examination</Link></li>
        <li><Link to="/result">Result</Link></li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Sidebar;
