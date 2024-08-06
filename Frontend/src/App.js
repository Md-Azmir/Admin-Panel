
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import AddCourse from './components/AddCourse';
import CourseList from './components/CourseList';


function App() {
  return (
    <Router>
      <div className="App">
      <Sidebar />
      <nav>
      <a href="/">All Courses</a>
      <a href="/add-course">Add Course</a>
      </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Switch>
                    <Route path="/add-course" component={AddCourse} />
                    <Route path="/" component={CourseList} />
                </Switch>
      </div>
    </Router>
  );
}

export default App;
