
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import AllCourses from './pages/AllCourses';
import Syllabus from './pages/Syllabus';
import Student from './pages/Student';
import Examination from './pages/Examination';
import Result from './pages/Result';
import AddCourse from './components/AddCourse';
import CourseList from './components/CourseList';


function App() {
  return (
    <Router>
      <div className="App">
      <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <div className='content'>
        <Switch>
        <Route path="/all-courses" component={AllCourses} />
            <Route path="/syllabus" component={Syllabus} />
            <Route path="/student" component={Student} />
            <Route path="/examination" component={Examination} />
            <Route path="/result" component={Result} />  
                </Switch>
                </div>
      </div>
    </Router>
  );
}

export default App;
