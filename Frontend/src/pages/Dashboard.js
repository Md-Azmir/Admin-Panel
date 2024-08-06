import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/all-courses">All Courses</Link></li>
        <li><Link to="/syllabus">Syllabus</Link></li>
        <li><Link to="/student">Student</Link></li>
        <li><Link to="/examination">Examination</Link></li>
        <li><Link to="/result">Result</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;