
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import sidebar from './components/Sidebar';
import AllCourses from './pages/AllCourses';
import Syllabus from './pages/Syllabus';
import Student from './pages/Student';
import Examination from './pages/Examination';
import Result from './pages/Result';
// import AddCourse from './components/AddCourse';
import CourseList from './components/CourseList';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    // <Router>
      <div className="App">
      <sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <div className='content'>
        <Routes>
        <Route path="/all-courses" component={AllCourses} />
            <Route path="/syllabus" component={Syllabus} />
            <Route path="/student" component={Student} />
            <Route path="/examination" component={Examination} />
            <Route path="/result" component={Result} />  
        </Routes>
                </div>
      </div>
    // </Router>
  );
}

export default App;
